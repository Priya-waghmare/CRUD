import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private usr:BookServiceService, private route:Router) { }

  ngOnInit(): void {
    this.getbook();
  }

  namelist:any
  getbook()
  {
    this.usr.getdata().subscribe(
      (data)=>{this.namelist=data}
    )
  }

  onupdt(Name:any)
  {
     this.route.navigate(['/update-data',Name])
  }

  del(Name:any)
  {
    return this.usr.deldt(Name).subscribe((data)=>{console.log(data);
      alert("Data Deleted");})
  }

}
