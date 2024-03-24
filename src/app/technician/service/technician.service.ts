import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAllAppointments(): Observable<any>{
    return this.httpClient.get(BASIC_URL + "api/v1/appointment/getAllAppointments", { headers: this.requestHeader });
  }

  getAllTests(): Observable<any>{
    return this.httpClient.get(BASIC_URL + "api/v1/test/getAllTests", { headers: this.requestHeader });
  }
}
