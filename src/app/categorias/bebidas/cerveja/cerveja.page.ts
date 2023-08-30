import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../../../services/bdtemp.service';

@Component({
  selector: 'app-cerveja',
  templateUrl: './cerveja.page.html',
  styleUrls: ['./cerveja.page.scss'],
})
export class CervejaPage implements OnInit {
  qtdeItensCarrinho = 0;

  listaProdutos = [
    {
      nome:"Cerveja Heineken",
      descricao:"A verdinha amada pelo mundo inteiro",
      valor:12,
      foto:'https://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/cerveja-heineken-600-ml1-b547fecf33d607085a16247172333562-640-0.jpg'
    },
    {
      nome:"Cerveja brahma",
      descricao:"A vermelinha amada pelo povo brasileiro",
      valor:4.5,
      foto:'https://bretas.vtexassets.com/arquivos/ids/177104/645ab26c199226207ba4ad67.png?v=638192623174570000'
    },
    {
      nome:"Cerveja skol",
      descricao:"A cerveja que desce redondo",
      valor:2.5,
      foto:'https://bretas.vtexassets.com/arquivos/ids/177610/6464e468364306c8e98451a8.png?v=638199304735130000'
    },
    {
      nome:"Cerveja Antartica",
      descricao:"Gelaaaaaddaaaaaaaaa",
      valor:3,
      foto:'https://tb1304.vtexassets.com/arquivos/ids/196657/Cerveja-antarctica-lt-473ML.jpg?v=638089915238430000'
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
