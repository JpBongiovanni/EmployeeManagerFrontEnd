import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public employees: Employee[];

  constructor(private employeeService: EmployeeService) {
    this.employees = [];
  }

  ngOnInit(){
      this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(employee: Employee, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'add'){
      console.log(mode);
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit'){
      console.log(mode);
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete'){
      console.log(mode);
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
    console.log("Clicked!")
  }

}
