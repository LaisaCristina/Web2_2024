import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { ItemPedidoComponent } from './pages/pedido/item-pedido/item-pedido.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import {listaPedid}
import { ModalConfirmacaoComponent } from './pages/pedido/modal-confirmacao/modal-confirmacao.component';
import { ModalEmptyItensComponent } from './pages/pedido/modal-empty-itens/modal-empty-itens.component';
import { ListaPedidosComponent } from './pages/lista-pedidos/lista-pedidos.component';
import { FilterPedidosPipe } from './pipes/filter-pedidos.pipe';
import { OrderByDatePipe } from './pipes/order-by-date.pipe';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PedidoComponent,
    ItemPedidoComponent,
    HomeComponent,
    CadastroComponent,
    NavBarComponent,
    ModalConfirmacaoComponent,
    ModalEmptyItensComponent,
    ListaPedidosComponent,
    FilterPedidosPipe,
    OrderByDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
