//import { Component, OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})


//export class TarjetaComponent implements OnInit {

export class TarjetaComponent {


  @Input() item: {
        id: string; 
        permit_: string; 
        permit_type: string; 
        review_type: string; 
        application_start_date: string; 
        issue_date: string; 
        processing_time: string; 
        street_number: string; 
        street_direction: string; 
        street_name: string; 
        suffix: string; 
        work_description: string; 
        building_fee_paid: string; 
        zoning_fee_paid: string; 
        other_fee_paid: string; 
        subtotal_paid: string; 
        building_fee_unpaid: string; 
        zoning_fee_unpaid: string; 
        other_fee_unpaid: string; 
        subtotal_unpaid: string; 
        building_fee_waived: string; 
        zoning_fee_waived: string; 
        other_fee_waived: string; 
        subtotal_waived: string; 
        total_fee: string; 
        contact_1_type: string; 
        contact_1_name: string; 
        contact_1_city: string; 
        contact_1_state: string; 
        contact_1_zipcode: string; 
        reported_cost: string;
        pin1: string;
        community_area: string;
        census_tract: string;
        ward: string;
        xcoordinate: string;
        ycoordinate: string;
        latitude: string;
        longitude: string;
      };      

  //@Input() item: string;
  //@Input() item: { id: string;    work_description: string;    latitude: string;    longitude: string; };
  //@Input() item2: { waitFor: boolean; message: string; };


 
  message: String;
  
  lista:string[]=["hola","que","tal","estas"];

  posicion={lat: 40, lng: -20};
  

  constructor() {
      console.log('myCustomComponent');
      this.message="hola"
      this.posicion = {lat: 40, lng: -20};
     // this.message=this.item["message"];
  }

  ngOnInit() {
      console.log(this.item);
  }
}

