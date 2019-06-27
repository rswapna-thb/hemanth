import { Injectable } from '@angular/core';
import { EmployeeModel } from './employee-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeemodel: EmployeeModel;

  constructor(private http: HttpClient) { }

  addEmployee(employeemodel:EmployeeModel){
    
    return this.http.post('/home/aphemant/Desktop/example.txt',EmployeeModel);
  }
 public setter(employeemodel:EmployeeModel){
   this.employeemodel=employeemodel;
 }
 public getter(employeemodel)
 {
    return this.employeemodel;   
 }
}
