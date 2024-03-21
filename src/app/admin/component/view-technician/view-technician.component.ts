import { Component } from '@angular/core';
import { AdminServiceService } from '../../service/admin-service.service';
import { response } from 'express';

@Component({
  selector: 'app-view-technician',
  templateUrl: './view-technician.component.html',
  styleUrl: './view-technician.component.css'
})
export class ViewTechnicianComponent {

  technicians: any;


  constructor (
    private adminService: AdminServiceService,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllTechnician();
  }


  getAllTechnician(){
    this.adminService.getAllTechnician().subscribe(response =>{
      this.technicians = response;
    })
  }

}
