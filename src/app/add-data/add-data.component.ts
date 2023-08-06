import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  constructor(private usr:BookServiceService, private route:Router) { }

  ngOnInit(): void {
  }


  empform= new FormGroup(
    {
      Name:new FormControl('',Validators.required),
      Summary:new FormControl('',Validators.required),
    }
    )

    addbook()
    {
      console.log(this.empform.value);
      this.usr.addnwbk(this.empform.value).subscribe(
        (data)=>{console.log(data)}
      )
      alert("Data Added Successfully!!");
      this.route.navigate(['/data']);
      this.empform.reset();
    }
}
