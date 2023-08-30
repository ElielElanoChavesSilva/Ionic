import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../../services/bdtemp.service';

@Component({
  selector: 'app-carvao',
  templateUrl: './carvao.page.html',
  styleUrls: ['./carvao.page.scss'],
})
export class CarvaoPage implements OnInit {
  qtdeItensCarrinho = 0;

  listaProdutos = [
    {
      nome:"Carvão vegetal",
      descricao:"Selecionado especificamente para você.",
      valor:8,
      foto:'https://images.tcdn.com.br/img/img_prod/1031480/saco_de_carvao_padrao_4kg_43_1_b31562beb78549622e8a175a2e445fce.jpg'
    },
    {
      nome:"Carvão Mineral",
      descricao:"Selecionado especificamente para você.",
      valor:15,
      foto:'https://images.tcdn.com.br/img/img_prod/739678/carvao_especial_para_churrasco_2k_c_4_2777_2_f238b07b2406c2d0ec731bf26ef3a43e.jpg'
    },
    {
      nome:"carvão de eucalipto",
      descricao:"Selecionado especificamente para você.",
      valor:18,
      foto:'https://www.extrabom.com.br/uploads/produtos/350x350/9394_carvao_vegetal_eucalipto_picuma_2kg.jpg'
    },
    {
      nome:"carvão especial",
      descricao:"Selecionado especialmente para o seu churraco.",
      valor:20,
      foto:'https://redemachado.com.br/thumb.php?w=400&q=100&src=arquivos/406445.jpg'
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
