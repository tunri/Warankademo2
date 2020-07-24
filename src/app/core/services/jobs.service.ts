// import { Injectable } from '@angular/core';
// import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
import { Job } from '@app/core/models';
import { mockDataJobs } from '../mock/jobs.mock';

export class JobsService {

    private static instance: JobsService;


    public static getInstance(): JobsService {
        if (!JobsService.instance) {
            JobsService.instance = new JobsService();
        }

        return JobsService.instance;
    }

    findAll(): Observable<Job[]> {
        // return this.apiService.get('/oficio');
        const jobs = mockDataJobs.map(item => new Job(item.id, item.nombre));
        return of(jobs);
    }
}
