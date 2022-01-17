import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Prescription {
    id:number;
    diagnosis:string;
    prescription:number;
    doctor:Doctor;
    patient: Patient;
}
