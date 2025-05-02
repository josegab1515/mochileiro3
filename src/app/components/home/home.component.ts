import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


interface Cards {
  nome: String;
  numero: number;
  cor: String;
}

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})



export class HomeComponent implements OnInit {
  menuItens = [
    { nome: 'Home', rota: '/home', icones: 'bi-house' },
    { nome: ' Notificações', rota: '#', icones: 'bi-bell' },
    { nome: ' Matérias', rota: '#', icones: 'bi-journals' },
    { nome: 'valores', rota: '#', icones: 'bi-star' },
    { nome: 'Sair', rota: '/login', icones: 'bi-box-arrow-right' }
  ]

  rotaAtual: string = '';
  cards: Cards[] = [];
  contadorCard = 1;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe(() => {

      this.rotaAtual = this.router.url;
    });

    this.adicionarCard();
    this.adicionarCard();
    this.adicionarCard();


  }

  adicionarCard(){
    const corAleatoria = this.geralCorAlet();

    const novoCard ={
      nome: `Termo ${this.contadorCard}`,
      numero: this.contadorCard,
      cor: corAleatoria
    }

    this.cards.push(novoCard);
    this.contadorCard++;
    
  }

  geralCorAlet(): String{
    const caracteres ='0123456789ABCDEF';
    let cor ='#';
    for(let i = 0; i<6;i++){
      cor += caracteres[Math.floor(Math.random()*16)]
    }
    return cor;
  }

  animarBotao(event: Event) {
    const botao = event.target as HTMLElement;
    botao.classList.add('pulsar');
  
    setTimeout(() => {
      botao.classList.remove('pulsar');
    }, 300); // tempo da animação (300ms)
  }
}
