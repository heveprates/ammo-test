export class CreateProdutoDto {
  nome: string;
  descricao: string;
  precoPromocional: number;
  precoOriginal: number;
  imagens: string[];
  categoria: string;
}
