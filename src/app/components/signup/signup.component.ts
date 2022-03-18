import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  formName = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['',  [Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')] ],
    password: ['', [Validators.required]],
    address:['', [Validators.required]],
    city:['', [Validators.required]],
    state:['', [Validators.required]],
    zip:[''],
  });
  
  onSubmit(){
  
    console.log(this.formName.value );
    
  }

  get f() {
    return this.formName.controls
  }

  

}
