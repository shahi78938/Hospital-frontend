import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './HM-Component/doctor-list/doctor-list.component';
import { AddDoctorComponent } from './HM-Component/add-doctor/add-doctor.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PatientListComponent } from './HM-Component/patient-list/patient-list.component';
import { AddPatientComponent } from './HM-Component/add-patient/add-patient.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AddPrescriptionComponent } from './HM-Component/add-prescription/add-prescription.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    AddDoctorComponent,
    PatientListComponent,
    AddPatientComponent,
    HomeComponent,
    AddPrescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
