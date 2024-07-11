import { Component } from '@angular/core';

interface EmployeeMaintenance {
  name: string;
  email: string;
  birthDate: string;
  password: string;
}

@Component({
  selector: 'app-employee-maintenance',
  templateUrl: './employee-maintenance.component.html',
})
export class EmployeeMaintenanceComponent {
  listaVazia: boolean = false;
  selectedItem: EmployeeMaintenance | null = null;
  selectedIndex: number | null = null;

  employee: EmployeeMaintenance = {
    name: '',
    email: '',
    birthDate: '',
    password: '',
  };

  itemEmEdicao: EmployeeMaintenance | null = null;

  employees: EmployeeMaintenance[] = [
    {
      email: 'user1@example.com',
      name: 'Alice Smith',
      birthDate: '1985-05-15',
      password: 'securePass123',
    },
    {
      email: 'user2@example.com',
      name: 'Bob Johnson',
      birthDate: '1992-12-30',
      password: 'myP@ssw0rd',
    },
    {
      email: 'user3@example.com',
      name: 'Eva Brown',
      birthDate: '1988-09-22',
      password: 'pass1234',
    },
    {
      email: 'user4@example.com',
      name: 'David Wilson',
      birthDate: '1995-03-10',
      password: 'p@ssw0rd567',
    },
    {
      email: 'user5@example.com',
      name: 'Sophia Davis',
      birthDate: '1990-07-04',
      password: 'securePass456',
    },
    {
      email: 'user6@example.com',
      name: 'Liam Martinez',
      birthDate: '1987-11-20',
      password: 'mySecureP@ss',
    },
    {
      email: 'user7@example.com',
      name: 'Olivia Taylor',
      birthDate: '1993-02-08',
      password: 'p@ssw0rd789',
    },
    {
      email: 'user8@example.com',
      name: 'Lucas Anderson',
      birthDate: '1986-06-25',
      password: 'passw0rd123',
    },
  ];

  formatDateToInput(date: string | Date): string {
    const d = new Date(date);
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  }

  editItem(item: EmployeeMaintenance) {
    this.itemEmEdicao = { ...item };
    this.employee = {
      name: item.name,
      email: item.email,
      birthDate: this.formatDateToInput(item.birthDate),
      password: '', // Limpa a senha por razões de segurança
    };
  }

  updateItem() {
    if (this.itemEmEdicao) {
      const index = this.employees.findIndex((item) => item === this.itemEmEdicao);
      if (index !== -1) {
        this.employees[index] = { ...this.employee };
        this.itemEmEdicao = null;
      }
    } else if (
      this.employee.email &&
      this.employee.name &&
      this.employee.birthDate &&
      this.employee.password
    ) {
      this.employees.push({ ...this.employee });
      this.employee = {
        email: '',
        name: '',
        birthDate: '',
        password: '',
      };
    }
    this.listaVazia = this.employees.length === 0;
  }

  removeItem(item: EmployeeMaintenance) {
    const index = this.employees.indexOf(item);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
    this.listaVazia = this.employees.length === 0;
  }

  cleanForm() {
    this.itemEmEdicao = null;
    this.employee = {
      email: '',
      name: '',
      birthDate: '',
      password: '',
    };
  }
}
