import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage {
  qtdeItensCarrinho = 0;
  total = 0;

  listaProdutos = [
    {
      nome: "JBL - Sound Bar",
      descricao: "Experiência sonora incomparável...",
      preco: 1490,
      foto:"../../assets/img/JBLBar SoundBox.png"
    },
    {
      nome:"Alexa - Echo Dot Com Relógio",
      descricao:"Tempo, música e muito mais...",
      preco: 1233,
      foto: "../../assets/img/echo-dot-com-relogio-4a-geracao-smart-speaker-com-relogio-e-alexa_1_1200.png"
    },
    {
      name:"Playstation 5",
      descricao:"Controle Ultra leve e Ergonomico",
      preco: 3800,
      foto:"../../assets/img/Xbox-Series-X-1-TB-8K-HDR-2.png"
    },
  ];

  constructor(private bdtempService: BdtempService) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.listaProdutos = this.bdtempService.buscar('carrinho') || [];
    this.qtdeItensCarrinho = this.bdtempService.buscar('qtdeItensCarrinho') || 0;
    this.total = this.bdtempService.buscar('totalCarrinho') || 0;
  }

  addProdutoCarrinho(produto: any) {
    this.bdtempService.addProdutoCarrinho(produto);
    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho() {
    this.qtdeItensCarrinho = this.bdtempService.buscar('qtdeItensCarrinho');
    this.total = this.bdtempService.buscar('totalCarrinho');
  }

  removerItem(index: number) {
    this.bdtempService.removeProdutoCarrinho(index);
    this.listaProdutos = this.bdtempService.buscar('carrinho') || [];
    this.qtdeItensCarrinho = this.bdtempService.buscar('qtdeItensCarrinho') || 0;
    this.total = this.bdtempService.buscar('totalCarrinho');
  }

  limparCarrinho() {
    this.bdtempService.limparCarrinho();
    this.listaProdutos = [];
    this.qtdeItensCarrinho = 0;
    this.total = 0;
  }

  concluirCompra() {
    const carrinho = this.bdtempService.buscar('carrinho');

    if (carrinho && carrinho.length > 0) {
         this.bdtempService.limparCarrinho();
      console.log('Compra concluída com sucesso.');
    } else {
      console.log('Não é possível concluir a compra, carrinho vazio.');
    }}
}
