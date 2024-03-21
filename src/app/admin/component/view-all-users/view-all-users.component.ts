import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AdminServiceService } from '../../service/admin-service.service';
import { response } from 'express';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrl: './view-all-users.component.css'
})
export class ViewAllUsersComponent implements AfterViewInit{

  users: any;
displayedColumns: any;

  constructor (
    private adminService: AdminServiceService,
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit(): void {
    this.users.paginator = this.paginator;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.getAllUsers();
    
  }

  getAllUsers(){
    this.adminService.getAllUsers().subscribe(response =>{
      this.users = response;
    })
  }

}
