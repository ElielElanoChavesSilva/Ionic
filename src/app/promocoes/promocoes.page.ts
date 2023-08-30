import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.page.html',
  styleUrls: ['./promocoes.page.scss'],
})
export class PromocoesPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [
    {
      nome:"Picanha Friboi",
      descricao:"Qualidade Friboi que todos gostão.",
      valor:400,
      foto:'https://s.cornershopapp.com/product-images/2440554.png?versionId=xPVlPNkyqflegYVOEAr6Fmwy8DKfpequ'
    },
    {
      nome:"Carvão vegetal",
      descricao:"Selecionado especificamente para você",
      valor:7,
      foto:'https://images.tcdn.com.br/img/img_prod/1031480/saco_de_carvao_padrao_4kg_43_1_b31562beb78549622e8a175a2e445fce.jpg'
    },
    {
      nome:"Linguiça Calabresa",
      descricao:"Defumada e com pimenta",
      valor:5,
      foto:'https://ibassets.com.br/ib.item.image.big/b-bed7573288304ace9f6c595e1eb75462.png'
    },
    {
      nome:"Ceveja Heineken",
      descricao:"A verdinha amada pelo mundo inteiro",
      valor:12,
      foto:'https://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/cerveja-heineken-600-ml1-b547fecf33d607085a16247172333562-640-0.jpg'
    },
  ];

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
