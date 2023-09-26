import { Controller, Get, Query } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { SearchProdutoDto } from './dto/search-produto.dto';
import { mapProdutosToResponse } from './parsers/to-reponse-parser';
@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  async findAll(@Query() searchProdutoDto: SearchProdutoDto) {
    const { search = null } = searchProdutoDto;
    const limit = Number(searchProdutoDto.limit ?? 10);
    const offset = Number(searchProdutoDto.offset ?? 0);
    const produtos = await this.produtosService.findAll(search, limit, offset);
    const totalProdutos = await this.produtosService.count(search);
    return {
      total: totalProdutos,
      limit,
      offset,
      products: mapProdutosToResponse(produtos),
    };
  }
}
