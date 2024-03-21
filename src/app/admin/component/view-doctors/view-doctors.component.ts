import { Component } from '@angular/core';
import { AdminServiceService } from '../../service/admin-service.service';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrl: './view-doctors.component.css'
})
export class ViewDoctorsComponent {

  doctors: any;

  constructor (
    private adminService: AdminServiceService,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.viewAllDoctors();
  }

  viewAllDoctors(){
    this.adminService.getAllDoctors().subscribe(res => {
      this.doctors = res;
    })
  }



}
