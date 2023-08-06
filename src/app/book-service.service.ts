import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  updt(value: Partial<{ Name: string | null; Summary: string }>, Name: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getdata()
  {
    return this.http.get('http://localhost:3700/alldetails')
  }

  addnwbk(data:any)
  {
    return this.http.post('http://localhost:3700/addbk',data)
  }

  update(data:any,Name:any)
  {
    return this.http.put(`http://localhost:3700/updatedata/${Name}`,data)
  }

  deldt(Name:any)
  {
    return this.http.delete(`http://localhost:3700/deldata/${Name}`)
  }

}
