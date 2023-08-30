import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./promocoes/promocoes.module').then( m => m.PromocoesPageModule)
  },
  {
    path: 'picanha',
    loadChildren: () => import('./categorias/carnes/picanha/picanha.module').then( m => m.PicanhaPageModule)
  },
  {
    path: 'cerveja',
    loadChildren: () => import('./categorias/bebidas/cerveja/cerveja.module').then( m => m.CervejaPageModule)
  },
  {
    path: 'carvao',
    loadChildren: () => import('./promocoes/carvao/carvao.module').then( m => m.CarvaoPageModule)
  },
  {
    path: 'linguica',
    loadChildren: () => import('./categorias/carnes/linguica/linguica.module').then( m => m.LinguicaPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
