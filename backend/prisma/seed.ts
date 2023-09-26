import { PrismaClient } from '@prisma/client';
import * as rawData from './data.json';
const prisma = new PrismaClient();

type RawProductType = {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  category: string;
  images: string[];
};

function parseRawProdutos(
  input: RawProductType,
): Parameters<(typeof prisma.produto)['create']>[0]['data'] {
  return {
    nome: input.title,
    descricao: input.description.slice(0, 190),
    categoria: input.category,
    precoOriginal: input.price,
    precoPromocional: input.price * (1 - input.discountPercentage / 100),
    imagens: {
      create: input.images.map((imagem) => ({ url: imagem })),
    },
  };
}

async function saveManyProdutos(inputList: RawProductType[]): Promise<number> {
  let index = 1;
  for (const input of inputList) {
    console.log(`Salvando ${index} de ${inputList.length} produtos ...`);
    await prisma.produto.create({
      data: parseRawProdutos(input),
    });
    index++;
  }
  return inputList.length;
}

async function main() {
  await prisma.imagem.deleteMany({
    where: {
      id: {
        gt: 0,
      },
    },
  });
  await prisma.produto.deleteMany({
    where: {
      id: {
        gt: 0,
      },
    },
  });
  const countProduto = await prisma.$transaction(() =>
    saveManyProdutos(rawData.products),
  );
  console.log(`Criado ${countProduto} produtos`);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
