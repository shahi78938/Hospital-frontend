import { Doctor } from "./doctor";
import { Prescription } from "./prescription";

export class Patient {
    id:number;
    name:string;
    age:number;
    dateofVisit:string;
    doctor: Doctor;
    prescription:Prescription;

}
