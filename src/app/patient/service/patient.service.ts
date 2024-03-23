import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );

  constructor(
    private httpClient: HttpClient,
  ) { }

  postAppointment(appointmentDto: any): Observable<any>{
    return this.httpClient.post(BASIC_URL + "api/v1/appointment/addAppointment", appointmentDto, { headers: this.requestHeader });
  }

  getAllAppointments(): Observable<any>{
    return this.httpClient.get(BASIC_URL + "api/v1/appointment/getAllAppointments", { headers: this.requestHeader });
  }

  getAllAppointmentsByName(name: any): Observable<any>{
    return this.httpClient.get(BASIC_URL + `api/v1/appointment/searchAppointment/${name}`, { headers: this.requestHeader });
  }

  getAllResults(): Observable<any>{
    return this.httpClient.get(BASIC_URL + "api/v1/results/getAllResults", { headers: this.requestHeader });
  }

  getAllDoctors(): Observable<any>{
    return this.httpClient.get(BASIC_URL + "api/v1/doctor/getAllDoctors", { headers: this.requestHeader });
  }


}
