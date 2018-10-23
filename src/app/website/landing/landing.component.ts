import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DistrictService } from '@app/core/services';
import { District, Job } from '@app/core/models';
import { NgForm } from '@angular/forms';
import { JobsService } from '@app/core/services/jobs.service';

import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class LandingComponent implements OnInit {

    control: Object = {};
    user: Object = {}
    isReady: boolean = false;

    private jobs: Job[] = [];
    filterJobs: Job[] = [];

    private districts: District[] = [];
    filterDistricts: District[] = [];


    constructor(
        private districtService: DistrictService,
        private jobService: JobsService,
        private router: Router,
        private authService: AuthService
    ) {
    }

    ngOnInit() {
        this.authService.subjectUser.subscribe(user => {
            this.user = user;
            this.isReady = true;
        });
        this.getJobs();
        this.getDistricts();
    }

    private filter(name: string, list: Array<Job | District>): Array<Job | District> {
        return list.filter(item => item.nombre.toLowerCase().indexOf(name.toLowerCase()) > -1);
    }

    getDistricts(): void {
        this.districtService.findAll().subscribe(districts => this.filterDistricts = this.districts = districts);
    }

    getJobs(): void {
        this.jobService.findAll().subscribe(jobs => this.filterJobs = this.jobs = jobs);
    }

    onChange(newvalue: string | Job, list: Array<Job | District>, listfilter: string) {
        newvalue = (typeof newvalue === 'object') ? newvalue.nombre : newvalue;
        this[listfilter] = this.filter(newvalue, list);
    }

    onSearch(form: NgForm) {
        const auth = true;
        if (auth) {
            this.router.navigate(['/recommended-workers'], {
                queryParams: this.getQueryParams(form.value)
            });
        } else {
            console.log(form.value);
        }
    }

    private getQueryParams(queries) {
        const querysParams = {};
        for (const prop in queries) {
            if (queries[prop] && queries[prop].trim().length) {
                querysParams[prop] = queries[prop].trim();
            }
        }
        return querysParams;
    }
    onLogout() {
        this.authService.subjectUser.next({});
        window.localStorage.clear();
    }
}
