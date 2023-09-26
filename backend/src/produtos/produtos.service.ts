import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { DbService } from 'src/prisma/db/db.service';

@Injectable()
export class ProdutosService {
  constructor(private readonly dbService: DbService) {}
  create(createProdutoDto: CreateProdutoDto) {
    const {
      nome,
      descricao,
      categoria,
      precoOriginal,
      precoPromocional,
      imagens,
    } = createProdutoDto;
    return this.dbService.produto.create({
      data: {
        nome,
        descricao,
        categoria,
        precoOriginal,
        precoPromocional,
        imagens: {
          createMany: {
            data: imagens.map((imagem) => ({ url: imagem })),
          },
        },
      },
    });
  }

  async count(search: string) {
    const whereSearch = search
      ? {
          OR: [
            { descricao: { contains: search } },
            { nome: { contains: search } },
            { categoria: { contains: search } },
          ],
        }
      : {};
    return this.dbService.produto.count({
      where: whereSearch,
    });
  }

  async findAll(search: string, limit: number, offset: number) {
    const whereSearch = search
      ? {
          OR: [
            { descricao: { contains: search } },
            { nome: { contains: search } },
            { categoria: { contains: search } },
          ],
        }
      : {};
    return this.dbService.produto.findMany({
      where: whereSearch,
      include: {
        imagens: true,
      },
      take: limit,
      skip: offset,
    });
  }

  findOne(id: number) {
    return this.dbService.produto.findUnique({ where: { id } });
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    const { nome, descricao, categoria, precoOriginal, precoPromocional } =
      updateProdutoDto;
    return this.dbService.produto.update({
      where: { id },
      data: {
        nome,
        descricao,
        categoria,
        precoOriginal,
        precoPromocional,
      },
    });
  }

  async remove(id: number) {
    return await this.dbService.$transaction(async () => {
      await this.dbService.imagem.deleteMany({ where: { produtoId: id } });
      return await this.dbService.produto.delete({ where: { id } });
    });
  }
}
