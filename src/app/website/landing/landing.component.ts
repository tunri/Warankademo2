import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DistrictService} from '@app/core/services';
import {District, Job} from '@app/core/models';
import {NgForm} from '@angular/forms';
import {JobsService} from '@app/core/services/jobs.service';
import {query} from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class LandingComponent implements OnInit {

    control: Object = {};

    private jobs: Job[] = [];
    filterJobs: Job[] = [];

    private districts: District[] = [];
    filterDistricts: District[] = [];


    constructor(
        private districtService: DistrictService,
        private jobService: JobsService) {
    }

    ngOnInit() {
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


    displayFn(item?: Job | District): string {
        return item ? item.nombre : undefined;
    }

    onSearch(form: NgForm) {
        const auth = false;
        if (auth) {
            console.log('logged');
        } else {
            console.log('nologged');
        }
    }
}
