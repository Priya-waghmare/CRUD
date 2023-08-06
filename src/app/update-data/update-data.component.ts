import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {

  constructor(private usr:BookServiceService, private route:Router , private acr:ActivatedRoute) { }

  ngOnInit(): void {
    this.acr.params.subscribe((data)=>{this.Name=data['Name']})
  }
  empform= new FormGroup(
    {
      Name:new FormControl('',Validators.required),
      Summary:new FormControl('',Validators.required),
    }
    )
    Name:any;
    updt()
    {
      this.usr.update(this.empform.value, this.Name).subscribe(
        (info)=>{console.log(info)})
        alert("Details Updated Successfully!!");
        this.route.navigate(['/data']);

    }

}
