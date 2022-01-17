import { TestBed } from '@angular/core/testing';

import { DoctorService } from './doctor.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Doctor } from '../HM-Modal/doctor';
import { DataService } from './data.service';

describe('DoctorService', () => {
  let service: DoctorService;
  let http:HttpClient;
  let httpController:HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[DoctorService]
    });
    service = TestBed.inject(DoctorService);
    http=TestBed.inject(HttpClient);
    httpController=TestBed.inject(HttpTestingController);
  });
  afterEach(()=>
  {
    httpController.verify();
  })
  

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  
    

  it('getting Doctor details ',()=>{
    const testPost:Doctor[]=[{"id":1,"name":"test","age":54,"speciality":"ENT","patientsCount":2},
    {"id":2,"name":"test1","age":56,"speciality":"Genereal Physician","patientsCount":1}];
    service.getDoctorsList().subscribe(posts=>{
      expect(posts.length).toBe(2);
      expect(posts).toEqual(testPost);
    });
    const req =httpController.expectOne(`${service.baseURL}/Doctors`);
    expect(req.request.method).toBe('GET');
    req.flush(testPost);
    
});

it('adding into Doctor',()=>{
  const doctor:Doctor={"id":3,"name":"test2","age":56,"speciality":"Genereal Physician","patientsCount":0};
  service.addDoctor(doctor).subscribe(data=>expect(data).toEqual(doctor,fail));
  const req = httpController.expectOne(`${service.baseURL}/addDoctor`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(doctor);
    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: doctor });
    req.event(expectedResponse);
  }
);
})
