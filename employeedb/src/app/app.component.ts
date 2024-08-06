import { Component } from '@angular/core';
import { Employee } from './model/Employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeeManagementSystem';
  employee : Employee;
  result:string;
  employeeArr:Employee[];
  flag:boolean;

  constructor(private service:EmployeeService){
    this.employee = new Employee();
    this.result="";
    this.employeeArr=[];
    this.flag=false;
  }

  insertEmployee(data: any){
    this.employee.id = data.empId;
    this.employee.empName = data.empName;
    this.employee.empSalary = data.empSalary;
    this.result=this.service.insertEmployee(this.employee);
  }
  UpdateEmployee(data: any){
    this.employee.id = data.empId;
    this.employee.empName = data.empName;
    this.employee.empSalary = data.empSalary;
    this.result=this.service.UpdateEmployee(this.employee);
  }

  DeleteEmployee(data:any){
    this.result=this.service.DeleteEmployee(data.empId);
  }

  FindAllEmployee(){
    this.employeeArr=this.service.FindAllEmployee();
    this.flag=true;
  }
  FindEmployee(data:any){
    this.employee=this.service.FindEmployee(data.empId);
    this.result=this.employee.id+" "+this.employee.empName+this.employee.empSalary;
  }


}
