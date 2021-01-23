import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // <----

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent {
   //http-get
  title = 'http-get';
  totalAngularPackages; 
  posicion; // <---
  url: string = 'http://localhost:8000/api/consulta/';
  error;


  constructor(private http: HttpClient) { } // <---

  ngOnInit() {   // <---
    this.http.get<any>(this.url).subscribe(data => {
       this.totalAngularPackages = data;
       this.totalAngularPackages.sort((a,b) => a.permit_type.localeCompare(b.permit_type)); 
    },error => this.error = error);
  }
}


