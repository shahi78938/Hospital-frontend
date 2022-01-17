import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../HM-Modal/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL="http://localhost:9090";
  constructor(private httpClient:HttpClient) { }

  getPatientsList():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}/getPatients`);
  }
  addPatient(patient: Patient): Observable<any>{
    return this.httpClient.post<any>(`${this.baseURL}/addPatient`, patient);
  }

  getPatient(id:number):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL}/getPatient/${id}`);
  }

  getPatientWithoutPrescription(doc_id:number):Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}/patientsWithOutPrescription/${doc_id}`);
  }
  
}
