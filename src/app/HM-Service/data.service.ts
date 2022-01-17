import { Injectable } from '@angular/core';
import { Doctor } from '../HM-Modal/doctor';
import { Patient } from '../HM-Modal/patient';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private prescribedBy: Doctor;
  private prescribedTo: Patient;

  constructor() { }

  setPrescribedBy(doctor: Doctor) {
    this.prescribedBy = doctor;
  }

  setPrescribedTo(patient: Patient) {
    this.prescribedTo = patient;
  }

  getPrescribedBy(): Doctor {
    return this.prescribedBy;
  }

  getPrescribedTo(): Patient {
    return this.prescribedTo;
  }
}
