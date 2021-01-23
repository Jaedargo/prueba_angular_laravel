import { Component } from '@angular/core';

@Component({
  //template: '<app-async [props]="myProps"><app-async>',
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'angular';
 // yourVariable = 'Television';
  //yourVariable = { waitFor: true, message: 'foooooo' };
 // yourVariable = { id: "0001",   work_description: "un trabajo bien nice",   latitude: "3.694674",   longitude: "-76.5456164"};

  yourVariable = {
        id: "1619732",
        permit_: "100076014",
        permit_type: "PERMIT - ELECTRIC WIRING",
        review_type: "EASY PERMIT WEB",
        application_start_date: "2005-11-01T00:00:00.000",
        issue_date: "2008-11-19T00:00:00.000",
        processing_time: "1114",
        street_number: "4112",
        street_direction: "W",
        street_name: "CRYSTAL",
        suffix: "ST",
        work_description: "UPGRADE FROM 100AMP TO 200AMP.ADD ONE METER/PANEL BOX FOR PUBLIC,3 METERS TOTAL PUBLIC,2 UNITS ONLY....",
        building_fee_paid: "50",
        zoning_fee_paid: "0",
        other_fee_paid: "0",
        subtotal_paid: "50",
        building_fee_unpaid: "0",
        zoning_fee_unpaid: "0",
        other_fee_unpaid: "0",
        subtotal_unpaid: "0",
        building_fee_waived: "0",
        zoning_fee_waived: "0",
        other_fee_waived: "0",
        subtotal_waived: "0",
        total_fee: "50",
        contact_1_type: "CONTRACTOR-ELECTRICAL",
        contact_1_name: "DVC ELECTRIC",
        contact_1_city: "CICERO",
        contact_1_state: "IL",
        contact_1_zipcode: "60804-",
        reported_cost: "0",
        pin1: "16-03-230-043",
        community_area: "23",
        census_tract: "2306",
        ward: "37",
        xcoordinate: "1148661.7225659369",
        ycoordinate: "1908056.7029543428",
        latitude: "41.903644465",
        longitude: "-87.729373569"
      };
}
