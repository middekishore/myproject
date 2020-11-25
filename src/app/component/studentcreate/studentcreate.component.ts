import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import{StudentService} from "../../service/student.service"

@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html',
  styleUrls: ['./studentcreate.component.css']
})
export class StudentcreateComponent implements OnInit {

  submitted = false;
  studentForm: FormGroup;
  studentcourse:any = ['MBA', 'MSC', 'MCA', 'PHD', 'M.PHIL']
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private StudentService: StudentService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      course: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  // Choose designation with select dropdown
  updatecourse(e){
    this.studentForm.get('course').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.studentForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.studentForm.valid) {
      return false;
    } else {
      this.StudentService.createstudent(this.studentForm.value).subscribe(
        (res) => {
          window.alert('Student successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/studentlist'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
