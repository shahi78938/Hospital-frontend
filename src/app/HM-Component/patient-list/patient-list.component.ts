import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/HM-Modal/patient';
import { Prescription } from 'src/app/HM-Modal/prescription';
import { PrescriptionService } from 'src/app/HM-Service/prescription.service';
import { PatientService } from '../../HM-Service/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients:Patient[];
  patientSelected:Patient;
  patientSearchValue: number;
  patientsPrescription: Prescription;

  constructor(private patientService:PatientService,private router:Router, private prescriptionService : PrescriptionService) { }
  x: Number;
  ngOnInit(): void {
    //this.getPatients();
   

  }

  searchPatient(){
    this.x=1;
    this.patientService.getPatient(this.patientSearchValue).subscribe(patient=>{
      this.patientSelected = patient;
      this.prescriptionService.getPrescription(patient.id).subscribe(prescription => {
        this.patientsPrescription = prescription;
      });
    })

  }

  private getPatients(){
    this.patientService.getPatientsList().subscribe(data=>{
      this.patients=data;
    })
  }

}
