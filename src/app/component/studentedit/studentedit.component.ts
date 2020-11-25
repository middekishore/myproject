import { Student} from './../../model/student';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import{StudentService} from "../../service/student.service"

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.css']
})
export class StudenteditComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  studentData: Student[];
  studentcourse: any = ['MBA', 'MSC', 'MCA', 'PHD', 'M.PHIL']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private StudentService: StudentService,
    private router: Router
  ) {}

  ngOnInit() {
    
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getstudent(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      course: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  // Choose options with select-dropdown
  updatecourse(e) {
    this.editForm.get('course').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getstudent(id) {
    this.StudentService.getstudent(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        email: data['email'],
        course: data['course'],
        phoneNumber: data['phoneNumber'],
      });
    });
  }

  updatestudent() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      course: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.StudentService.updatestudent(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/studentlist');
            alert(' updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
