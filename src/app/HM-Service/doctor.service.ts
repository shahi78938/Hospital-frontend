import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { Doctor } from '../HM-Modal/doctor';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  baseURL="http://localhost:9090";
  constructor(private httpClient:HttpClient) { }

  getDoctorsList():Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.baseURL}/Doctors`);
  }

  addDoctor(doctor: Doctor): Observable<any>{
    return this.httpClient.post<any>(`${this.baseURL}/addDoctor`, doctor)
    .pipe(catchError(error => throwError(() => new Error(error))));
  }
}
