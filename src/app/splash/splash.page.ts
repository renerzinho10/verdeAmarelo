import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // Aplicar a classe de fade out após 4 segundos
    setTimeout(() => {
      document.querySelector('.splash')?.classList.add('fade-out');
    }, 4000); // 4 segundos para iniciar o fade out

    // Redirecionar após 6 segundos (tempo total de splash screen)
    setTimeout(() => {
      this.router.navigate(['/tabs/inicio']); // Substitua com a rota da sua página inicial
    }, 6000); // 6 segundos no total
  }
}