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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalConfirmacaoComponent } from './pages/pedido/modal-confirmacao/modal-confirmacao.component';
import { ModalEmptyItensComponent } from './pages/pedido/modal-empty-itens/modal-empty-itens.component';
import { ListaPedidosComponent } from './pages/lista-pedidos/lista-pedidos.component';
import { FilterPedidosPipe } from './pipes/filter-pedidos.pipe';
import { OrderByDatePipe } from './pipes/order-by-date.pipe';
import { ModalItemVazioComponent } from './pages/pedido/modal-item-vazio/modal-item-vazio.component';
import { FuncVisualizacaoPedidosComponent } from './pages/func-visualizacao-pedidos/func-visualizacao-pedidos.component';
import { CadastroRoupasComponent } from './cadastro-roupas/cadastro-roupas.component';
import { HomeEmployeeComponent } from './pages/home-employee/home-employee.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { CartComponent } from './components/cart/cart.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ProductComponent } from './components/product/product.component';
import { AlertComponent } from './components/alert/alert.component';
import { MatIconModule } from '@angular/material/icon';
import { EmployeeCrudComponent } from './pages/employee-crud/employee-crud.component';
import { EmployeeMaintenanceComponent } from './pages/employee-maintenance/employee-maintenance.component';
import { ReportCustomerComponent } from './pages/report-customer/report-customer.component';
import { ReportCustomerDetailsComponent } from './pages/report-customer-details/report-customer-details.component';
import { ReportIncomeComponent } from './pages/report-income/report-income.component';
import { ReportLoyalCustomerComponent } from './pages/report-loyal-customer/report-loyal-customer.component';
import { DateFilterComponent } from './components/date-filter/date-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarFuncComponent } from './components/nav-bar-func/nav-bar-func.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';

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
    OrderByDatePipe,
    ModalItemVazioComponent,
    CadastroRoupasComponent,
    FuncVisualizacaoPedidosComponent,
    ModalItemVazioComponent, 
    HomeEmployeeComponent,
    ConfirmationModalComponent,
    CartComponent,
    ButtonsComponent,
    ProductComponent,
    AlertComponent,
    EmployeeCrudComponent,
    EmployeeMaintenanceComponent,
    ReportCustomerComponent,
    ReportCustomerDetailsComponent,
    ReportIncomeComponent,
    ReportLoyalCustomerComponent,
    DateFilterComponent,
    NavBarFuncComponent,
    PedidosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
