import { Component } from '@angular/core';
import { TechnicianService } from '../../service/technician.service';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrl: './view-doctors.component.css'
})
export class ViewDoctorsComponent {

  doctors: any;

  constructor (
    private technicianService: TechnicianService,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.viewAllDoctors();
  }

  viewAllDoctors(){
    this.technicianService.getAllDoctors().subscribe(res => {
      this.doctors = res;
    })
  }

}
