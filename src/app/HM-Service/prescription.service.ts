import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prescription } from '../HM-Modal/prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  private baseURL="http://localhost:9090";
  constructor(private httpClient:HttpClient) { }

  addPrescription(prescription: Prescription): Observable<any>{
    return this.httpClient.post<any>(`${this.baseURL}/addPrescription`, prescription);
  }
  
  getPrescription(patientId: number): Observable<Prescription>{
    return this.httpClient.get<Prescription>(`${this.baseURL}/getPrescription/${patientId}`);
  }
}
