import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl} from '@angular/forms';
import { EmployeeModel } from '../employee-model';
import { EmployeeService } from '../employee.service';
import { NgForm } from '@angular/forms';
import {Http, Headers}  from '@angular/http';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeemodel:EmployeeModel=new EmployeeModel();
  registerForm: FormGroup;
  submitted = false;

  textBoxDisabled=true;
  toggle(){
    this.textBoxDisabled = !this.textBoxDisabled;
  }
  constructor(private router:Router, private formBuilder: FormBuilder, private employeeservice:EmployeeService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.minLength(4)]],
      lastName:  ['', Validators.required],
      date: ['', Validators.required],
      year: ['', Validators.required],
      percentage: ['',Validators.required],
      permanent_address: ['',Validators.required],
      present_address: ['',Validators.required],
      email: ['',[Validators.required]],
      mobile_num: ['',[Validators.required,Validators.maxLength(12)]],
      FatherName: ['',Validators.required],
      pan: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(0)]],
      adhaar: ['',[Validators.required, Validators.maxLength(12)]]
    });
  }
  addEmployee(f:NgForm)
  {
    this.employeeservice.addEmployee(this.employeemodel)
    .subscribe(
    data =>{
        alert("data added succesfully");
    }   
    );
  }
  get f() { return this.registerForm.controls };
  onSubmit(){

 this.submitted = true;   if (this.registerForm.invalid) {
     return;
 }
 alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}

}
