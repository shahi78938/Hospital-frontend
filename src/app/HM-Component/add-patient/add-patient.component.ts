import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/HM-Modal/doctor';
import { DoctorService } from 'src/app/HM-Service/doctor.service';
import {Patient} from '../../HM-Modal/patient'
import { PatientService } from '../../HM-Service/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patient:Patient = new Patient();
  doctors: Doctor[];

  constructor(private patientService:PatientService, private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data=>{this.doctors = data});
  }

  addPatient(){
    if( this.patient.name === undefined || this.patient.doctor === undefined) {
      alert("Please fill Name and select a Doctor");
    } else {
      this.patientService.addPatient(this.patient).subscribe(patientId => {
        console.log("Patient Id inserted: "+ patientId);
        alert(`New Patient ${this.patient.name} with id ${patientId} got inserted.`);
        window.location.reload();
      });
    }
  }

}
