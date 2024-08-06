import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from './model/Employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string;
  employeeArr:Employee[];
  employee:Employee;
  constructor(private http:HttpClient) {
    this.url="http://localhost:3004/employees";
    this.employeeArr=[];
    this.employee=new Employee();
   }

  insertEmployee(employee:Employee){
    this.http.post<Employee>(this.url,employee).subscribe();
    return "Employee Details Added";
  }
  UpdateEmployee(employee:Employee){
    this.http.put<Employee>(this.url+"/"+employee.id,employee).subscribe();
    return "Employee Details Updated";
  }
  DeleteEmployee(empId:number){
    this.http.delete<Employee>(this.url+"/"+empId).subscribe();
    return "Employee Detail Deleted";
  }

  FindAllEmployee(){
    this.http.get<Employee[]>(this.url).subscribe(data=>this.employeeArr=data);
    return this.employeeArr;
  }
  FindEmployee(empId:number){
    this.http.get<Employee>(this.url+"/"+empId).subscribe(data=>this.employee=data);
    return this.employee;



}
}
