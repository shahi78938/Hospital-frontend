import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/HM-Modal/patient';
import { DataService } from 'src/app/HM-Service/data.service';
import { PatientService } from 'src/app/HM-Service/patient.service';
import {Doctor} from '../../HM-Modal/doctor'
import { DoctorService } from '../../HM-Service/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors:Doctor[];
  doctorSelected:Doctor;
  patients: Patient[];
  patientSelected: Patient;

  constructor(private doctorService:DoctorService,
    private patientService: PatientService,
    private dataService: DataService,
    private router: Router)
  {
    
  }

  ngOnInit(): void {
    this.getDoctors();
  }

  private getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data =>
    {
      this.doctors = data;
    });
  }

  onDoctorSelected(){
    this.patientService.getPatientWithoutPrescription(this.doctorSelected.id).subscribe(data =>
    {
      this.patients = data;
    });
  }

  onPatientSelected(){
    this.dataService.setPrescribedBy(this.doctorSelected);
    this.dataService.setPrescribedTo(this.patientSelected);
    this.router.navigate([`add-prescription`,]);
  }

}
