import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './HM-Component/add-doctor/add-doctor.component';
import { AddPatientComponent } from './HM-Component/add-patient/add-patient.component';
import { AddPrescriptionComponent } from './HM-Component/add-prescription/add-prescription.component';
import { DoctorListComponent } from './HM-Component/doctor-list/doctor-list.component';
import { PatientListComponent } from './HM-Component/patient-list/patient-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'patients',component:PatientListComponent},
  {path:'doctors',component:DoctorListComponent},
  {path:'add-doctor',component:AddDoctorComponent},
  {path:'add-patient',component:AddPatientComponent},
  {path:'add-prescription',component:AddPrescriptionComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
