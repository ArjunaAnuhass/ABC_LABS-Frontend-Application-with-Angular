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

  postResult(resultsDto): Observable<any>{
    return this.httpClient.post(BASIC_URL + "api/v1/results/createResult", resultsDto, { headers: this.requestHeader });
  }

  getAllResults(): Observable<any>{
    return this.httpClient.get(BASIC_URL + "api/v1/results/getAllResults", { headers: this.requestHeader });
  }

  //update test Results

  getResultsById(id): Observable<any>{
    return this.httpClient.get(BASIC_URL + `api/v1/results/getResultsById/${id}`, { headers: this.requestHeader });
  }

  updateTestResuts(id: any, resultsDto: any): Observable<any>{
    return this.httpClient.put(BASIC_URL + `api/v1/results/updateResults/${id}`, resultsDto, { headers: this.requestHeader });
  }
  //end

  deleteResults(id: any): Observable<any>{
    return this.httpClient.delete(BASIC_URL + `api/v1/results/deleteTestResult/${id}`, { headers: this.requestHeader });
  }

  getAllDoctors(): Observable<any>{
    return this.httpClient.get(BASIC_URL + "api/v1/doctor/getAllDoctors", { headers: this.requestHeader });
  }

  getAllPatients(): Observable<any>{
    return this.httpClient.get(BASIC_URL + "api/v1/patient/getAllPatients", { headers: this.requestHeader });
  }
}
