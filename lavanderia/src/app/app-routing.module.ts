import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListaPedidosComponent } from './pages/lista-pedidos/lista-pedidos.component';
import { CadastroRoupasComponent } from './cadastro-roupas/cadastro-roupas.component';
import { FuncVisualizacaoPedidosComponent } from './pages/func-visualizacao-pedidos/func-visualizacao-pedidos.component';
import { HomeEmployeeComponent } from './pages/home-employee/home-employee.component';
import { EmployeeCrudComponent } from './pages/employee-crud/employee-crud.component';
import { EmployeeMaintenanceComponent } from './pages/employee-maintenance/employee-maintenance.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pedidos', component: PedidoComponent},
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent},
  { path: 'lista-pedidos', component: ListaPedidosComponent},
  {path: 'cadastrar-roupa', component: CadastroRoupasComponent},
  {path: 'func-visualizacao-pedidos', component: FuncVisualizacaoPedidosComponent},
  { path: 'home/employee', component: HomeEmployeeComponent},
  { path: 'employee/crud', component: EmployeeCrudComponent},
  { path: 'employee/maintenance', component: EmployeeMaintenanceComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
   // Redireciona para o login por padrão se a URL for vazia.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
