import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );

  constructor(
    private http: HttpClient,
  ) { }

  addTechnician(technicianDto: any): Observable<any> {
    return this.http.post(BASIC_URL + "api/v1/technician/createTechnician", technicianDto, { headers: this.requestHeader });
  }

  getAllTechnician(): Observable<any> {
    return this.http.get(BASIC_URL + "api/v1/technician/getAllTechnician", { headers: this.requestHeader})
  }

  postTest(testDto: any): Observable<any>{
    return this.http.post(BASIC_URL + "api/v1/test/createTest", testDto, { headers: this.requestHeader})
  }

  getAllTest(): Observable<any>{
    return this.http.get(BASIC_URL + "api/v1/test/getAllTests", { headers: this.requestHeader });
  }

  getAllTestByName(name: any): Observable<any>{
    return this.http.get(BASIC_URL + `api/v1/test/search/${name}`, { headers: this.requestHeader });
  }

  deleteTest(testId: any): Observable<any>{
    return this.http.delete(BASIC_URL + `api/v1/test/deleteTest/${testId}`, { headers: this.requestHeader });
  }

  getAllAppointmentResults(): Observable<any>{
    return this.http.get(BASIC_URL + "api/v1/results/getAllResults", { headers: this.requestHeader });
  }

  getAllUsers(): Observable<any>{
    return this.http.get(BASIC_URL + "api/v1/authentication/getAllUsers", { headers: this.requestHeader })
  }

  getAllAppointment(): Observable<any> {
    return this.http.get(BASIC_URL + "api/v1/appointment/getAllAppointments", { headers: this.requestHeader });
    }

    //update Test
    getAllTestById(testId): Observable<any> {
      return this.http.get(BASIC_URL + `api/v1/test/getTestById/${testId}`, { headers: this.requestHeader });
    }

    updateTest(testId: any, testDto: any): Observable<any> {
      return this.http.put(BASIC_URL + `api/v1/test/updateTest/${testId}`, testDto, { headers: this.requestHeader});
    }

    //end update test

    postDoctor(doctorDto: any): Observable<any>{
      return this.http.post(BASIC_URL + "api/v1/doctor/addDoctor", doctorDto, { headers: this.requestHeader });
    }

    getAllDoctors(): Observable<any>{
      return this.http.get(BASIC_URL + "api/v1/doctor/getAllDoctors", { headers: this.requestHeader });
    }

    postPatient(patientDto: any): Observable<any>{
      return this.http.post(BASIC_URL + "api/v1/patient/addPatient", patientDto, { headers: this.requestHeader });
    }


    getAllPatients(): Observable<any>{
      return this.http.get(BASIC_URL + "api/v1/patient/getAllPatients", { headers: this.requestHeader });
    }

    //updateAppointmet

    getAllAppointmentById(id): Observable<any>{
      return this.http.get(BASIC_URL + `api/v1/appointment/getAppointmentById/${id}`, { headers: this.requestHeader });
    }

    updateAppointment(id: any, appointmentDto: any): Observable<any>{
      return this.http.put(BASIC_URL + `api/v1/appointment/updateAppointment/${id}`, appointmentDto, { headers: this.requestHeader });
    }

    postAppointment(appointmentDto: any): Observable<any>{
      return this.http.post(BASIC_URL + "api/v1/appointment/addAppointment", appointmentDto, { headers: this.requestHeader});
    }

    //update user

    getAllUsersById(id): Observable<any>{
      return this.http.get(BASIC_URL + `api/v1/authentication/getUserById/${id}`, { headers: this.requestHeader });
    }

    updateUser(id: any, userDto: any): Observable<any>{
      return this.http.put(BASIC_URL + `api/v1/authentication/updateUser/${id}`, userDto, { headers: this.requestHeader });
    }
    //end

    //update patient

    getAllPatientById(id): Observable<any>{
      return this.http.get(BASIC_URL + `api/v1/patient/getPatientById/${id}`, { headers: this.requestHeader });
    }

    updatePatient(id: any, patientDto: any): Observable<any>{
      return this.http.put(BASIC_URL + `api/v1/patient/updatePatient/${id}`, patientDto, { headers: this.requestHeader });
    }
    //end

    //update doctor

    getAllDoctorById(id): Observable<any>{
      return this.http.get(BASIC_URL + `api/v1/doctor/getDoctorById/${id}`, { headers: this.requestHeader });
    }

    updateDoctor(id: any, doctorDto: any): Observable<any>{
      return this.http.put(BASIC_URL + `api/v1/doctor/updateDoctor/${id}`, doctorDto, { headers: this.requestHeader });
    }

}
