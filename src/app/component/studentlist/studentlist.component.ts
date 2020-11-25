import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  Student:any = [];
 names:string="";

  constructor(private StudentService: StudentService, private router: Router,private userService: UserService) { 
    this.readstudent();
  }

  

  readstudent(){
    this.StudentService.getstudents().subscribe((data) => {
     this.Student = data;
    })    
  }

  removestudent(stud, index) {
    if(window.confirm('Are you sure?')) {
        this.StudentService.deletestudent(stud._id).subscribe((data) => {
          this.Student.splice(index, 1);
        }
      )    
    }
  }
  ngOnInit() {
    
      
  }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/home']);
  }
}
