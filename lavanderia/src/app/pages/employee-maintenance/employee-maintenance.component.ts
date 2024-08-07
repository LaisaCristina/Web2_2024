import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-employee-maintenance',
  templateUrl: './employee-maintenance.component.html',
})
export class EmployeeMaintenanceComponent implements OnInit {
  listaVazia: boolean = false;
  selectedItem: Funcionario | null = null;
  selectedIndex: number | null = null;
  message: string = '';
  messageType: 'success' | 'error' = 'success';
  showConfirmationModal: boolean = false;
  funcionarioIdToRemove: number | null = null;

  employee: Funcionario = {
    id: 0,
    nome: '',
    email: '',
    dataNascimento: '',
    senha: '',
    recolhimentos: [],
    tipo: 'F'
  };

  itemEmEdicao: Funcionario | null = null;

  employees: Funcionario[] = [];

  touchedFields: { [key in 'nome' | 'email' | 'dataNascimento' | 'senha']: boolean } = {
    nome: false,
    email: false,
    dataNascimento: false,
    senha: false,
  };

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.funcionarioService.getFuncionarios().subscribe(
      (data) => {
        this.employees = data;
        this.listaVazia = this.employees.length === 0;
      },
      (error) => {
        console.error('Erro ao obter funcionários:', error);
        this.showMessage('Erro ao obter funcionários', 'error');
      }
    );
    this.employee.dataNascimento = this.formatDateToInput(this.employee.dataNascimento); 
  }

  isFormValid(): boolean {
    return (
      this.employee.nome.trim() !== '' &&
      this.employee.email.trim() !== '' &&
      this.employee.dataNascimento.trim() !== '' &&
      this.employee.senha.trim() !== '' &&
      this.isEmailValid(this.employee.email)
    );
  }

  isEmailValid(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  formatDateToInput(date: string | Date): string {
    const d = new Date(date);
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  }

  editItem(item: Funcionario) {
    this.itemEmEdicao = { ...item };
    this.employee = {
      id: item.id,
      nome: item.nome,
      email: item.email,
      dataNascimento: item.dataNascimento,
      senha: '', // Limpa a senha por razões de segurança
      recolhimentos: item.recolhimentos,
      tipo: 'F'
    };
  }

  updateItem() {
    if (this.itemEmEdicao) {
      this.funcionarioService.updateFuncionario(this.employee).subscribe(
        (updatedEmployee) => {
          const index = this.employees.findIndex((item) => item.id === updatedEmployee.id);
          if (index !== -1) {
            this.employees[index] = { ...updatedEmployee };
            this.itemEmEdicao = null;
          }
          this.showMessage('Funcionário atualizado com sucesso!', 'success')
        },
        (error) => {
          console.error('Erro ao atualizar funcionário:', error);
          this.showMessage('Erro ao atualizar funcionário', 'error');
        }
      );
    }
    // } else if (
    //   this.employee.email &&
    //   this.employee.nome &&
    //   this.employee.dataNascimento &&
    //   this.employee.senha
    // ) {
    //   this.employee.dataNascimento = this.formatDateFromInput(this.employee.dataNascimento);
    //   this.funcionarioService.createFuncionario(this.employee).subscribe(
      else if (this.isFormValid()) { // Verifica se o formulário é válido
        this.employee.dataNascimento = this.formatDateFromInput(this.employee.dataNascimento);
        this.funcionarioService.createFuncionario(this.employee).subscribe(
        (newEmployee) => {
          this.employees.push(newEmployee);
          this.cleanForm();
          this.listaVazia = this.employees.length === 0;
          console.log('dados adicionados:', this.employee);
          this.showMessage('Funcionário adicionado com sucesso!', 'success');
        },
        (error) => {
          console.error('Erro ao criar funcionário:', error);
          this.showMessage('Erro ao criar funcionário', 'error');
        }
      );
    }  else {
      this.showMessage('Por favor, preencha todos os campos corretamente.', 'error'); // Mostra a mensagem de erro
    }
  }

  formatDateFromInput(date: string): string {
    const [day, month, year] = date.split('-').map(Number);
    return new Date(year, month - 1, day).toISOString().split('T')[0]; // Converte para ISO e remove a hora
  }

  removeItem(item: Funcionario) {
  this.showConfirmation(item.id); // Chama a função showConfirmation ao clicar no botão "Remover"
  };


  showConfirmation(employeeId: number) {
    this.showConfirmationModal = true;
    this.funcionarioIdToRemove = employeeId;
  }
  confirmRemove() {
    if (this.funcionarioIdToRemove) {
      this.funcionarioService.deleteFuncionario(this.funcionarioIdToRemove).subscribe(
        () => {
          this.employees = this.employees.filter((e) => e.id !== this.funcionarioIdToRemove);
          this.listaVazia = this.employees.length === 0;
          this.showMessage('Funcionário deletado com sucesso!', 'success');
          this.showConfirmationModal = false; // Fecha o modal após a remoção
        },
        (error) => {
          console.error('Erro ao deletar funcionário:', error);
          this.showMessage('Erro ao deletar funcionário', 'error');
          this.showConfirmationModal = false; // Fecha o modal em caso de erro
        }
      );
    }
  }

  cancelRemove() {
    this.showConfirmationModal = false; // Fecha o modal
  }
  cleanForm() {
    this.employee = {
      id: 0,
      nome: '',
      email: '',
      dataNascimento: '',
      senha: '',
      recolhimentos: [],
      tipo: 'F'
    };
    this.itemEmEdicao = null;
    this.touchedFields = {
      nome: false,
      email: false,
      dataNascimento: false,
      senha: false,
    };
  }

  markFieldAsTouched(field: 'nome' | 'email' | 'dataNascimento' | 'senha') {
    this.touchedFields[field] = true;
  }

  showMessage(message: string, type: 'success' | 'error') {
    this.message = message;
    this.messageType = type;
    setTimeout(() => {
      this.message = ''; // Limpa a mensagem após 3 segundos
    }, 3000);
  }
}
