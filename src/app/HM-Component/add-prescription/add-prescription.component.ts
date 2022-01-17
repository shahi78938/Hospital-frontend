import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prescription } from 'src/app/HM-Modal/prescription';
import { DataService } from 'src/app/HM-Service/data.service';
import { PrescriptionService } from 'src/app/HM-Service/prescription.service';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css']
})
export class AddPrescriptionComponent implements OnInit {

  prescription: Prescription = new Prescription();

  constructor(private prescriptionService : PrescriptionService, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.prescription.doctor = this.dataService.getPrescribedBy();
    this.prescription.patient = this.dataService.getPrescribedTo();
  }

  addPrescription() {
    this.prescriptionService.addPrescription(this.prescription).subscribe(data => {
      console.log(`Added Prescription: ${data}`);
      alert(`Added Prescription: ${data}`);
      this.router.navigate(["doctors",]);
    });
  }
}
