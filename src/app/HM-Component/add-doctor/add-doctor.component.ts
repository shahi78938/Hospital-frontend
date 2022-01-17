import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/HM-Service/data.service';
import {Doctor} from '../../HM-Modal/doctor'
import { DoctorService } from '../../HM-Service/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  doctors:Doctor[];
  doctor:Doctor = new Doctor();
  disableSubmit:boolean = false;
  specialities: string[] = ["ENT", "OBGYN", "Genereal Physician", "Pediatrics", "Cardialogist"];

  constructor(private doctorService:DoctorService, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data=>
      {
      this.doctors=data});
  }

  addDoctor() {
    if(this.doctor.name===undefined || this.doctor.speciality===undefined) {
      alert("Please fill Name and Speciality feilds");
    } else {
      this.disableSubmit = true;
      this.doctorService.addDoctor(this.doctor).subscribe(doctorId => {
        this.doctor.id = doctorId;
        alert(`New Doctor ${this.doctor.name} - ${this.doctor.speciality} with id ${doctorId} got inserted.`);
        window.location.reload();
      }, error => {
        this.disableSubmit = false;
      });
    }
  }
}
