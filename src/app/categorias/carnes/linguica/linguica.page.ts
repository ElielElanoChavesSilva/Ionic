import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../../../services/bdtemp.service';

@Component({
  selector: 'app-linguica',
  templateUrl: './linguica.page.html',
  styleUrls: ['./linguica.page.scss'],
})
export class LinguicaPage implements OnInit {
  qtdeItensCarrinho = 0;

  listaProdutos = [
    {
      nome:"Linguiça Toscana",
      descricao:"Qualidade Seara de Produtos.",
      valor:5,
      foto:'https://madureira.acouguebomboi.com.br/wp-content/uploads/2022/02/linguica-toscana-leve-mais-kg_84013.png'
    },
    {
      nome:"Linguiça de Frango",
      descricao:"Qualidade Seara de Produtos.",
      valor:24,
      foto:'https://www.acouguebomboi.com.br/wp-content/uploads/2021/04/linguica-de-frango-bomboi-mercado-de-carnes-rio-de-janeiro.jpg'
    },
    {
      nome:"linguiça com queijo coalho",
      descricao:"Qualidade Perdigão de Produtos.",
      valor:30,
      foto:'https://hiperideal.vtexassets.com/arquivos/ids/170638/1996436.jpg?v=636615826409630000'
    },
    {
      nome:"Linguiça com pimenta biquinho",
      descricao:"Qualidade Perdigão de Produtos.",
      valor:20,
      foto:'https://hiperideal.vtexassets.com/arquivos/ids/170637/1996428.jpg?v=636615826406800000'
    },

  ]

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }

  addProdutoCarrinho(produto:any){
    this.bdtemp.addProdutoCarrinho(produto);
    this.bucarDadosCarrinho();
  }

  bucarDadosCarrinho(){
    this.qtdeItensCarrinho = this.bdtemp.buscar('qtdeItensCarrinho');
  }

}
