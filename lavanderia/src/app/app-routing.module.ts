import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pedidos', component: PedidoComponent},
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redireciona para o login por padrão se a URL for vazia.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
