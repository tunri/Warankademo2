import { Component, OnInit } from '@angular/core';
import { Recommended } from '@app/core/models/model.recommended';
import { RecommendeService } from '@app/core/services/recommende.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@app/core/services/auth.service';
import { Job, District } from '@app/core/models';
import { JobsService } from '@app/core/services/jobs.service';
import { DistrictService } from '@app/core/services';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-recommended-worker',
    templateUrl: './recommendedWorker.component.html',
    styleUrls: ['./recommendedWorker.component.scss']
})
export class RecommendedWorkersComponent implements OnInit {

    listRecommendeds: any[] = [];
    loader: boolean = true;
    user: object = {};
    haverWorkers: boolean = false;
    jobs: Job[] = [];
    districts: District[] = [];

    filterDistrict: District[] = [];

    constructor(
        private recommendeService: RecommendeService,
        private authService: AuthService,
        private route: ActivatedRoute,
        private jobService: JobsService,
        private districtService: DistrictService,
    ) {
    }

    ngOnInit() {
        this.authService.subjectUser.subscribe(user => {
            this.user = user;
        });
        this.getJobs();
        this.getDistricts();
        this.findAll();
    }

    findAll(filter?): void {
        this.listRecommendeds = [{}, {}, {}];
        const query = filter || this.toStringQuery();
        this.recommendeService.findAll(query).subscribe(list => {
            this.listRecommendeds = list.reverse();
            if (!list.length) {
                this.haverWorkers = true;
            }
        }, error => {
            this.loader = false;
        });
    }
    
    private getJobs() {
        this.jobService.findAll().subscribe(list => {
            this.jobs = this.builderFilter(list);
        });
    }
    private getDistricts() {
        this.districtService.findAll().subscribe(list => {
            this.districts = this.builderFilter(list);
        });
    }
    private builderFilter(list) {
        const params = this.route.snapshot.queryParams;
        list.forEach(item => {
            if (item.nombre === params.distrito) {
                item.selected = true;
                this.filterDistrict.push(item.nombre);
            } else {
                item.selected = false;
            }
        });
        return list.sort((a, b) => {
            if (a.nombre > b.nombre) {
                return 1;
            }
            if (a.nombre < b.nombre) {
                return -1;
            }
            return 0;
        });
    }

    private toStringQuery(): string {
        const qp = this.route.snapshot.queryParams;
        const querystring = Object.keys(qp).map(q => `${q}[nombre]=${qp[q]}`).join('&');
        return (!!querystring.length) ? `?${querystring}` : '';
    }

    onChangeDistrict(item) {
        item.selected = !item.selected;
        if (item.selected) {
            this.filterDistrict.push(item.nombre);
        } else {
            this.filterDistrict.filter(nombre => nombre !== item.nombre);
        }
    }

}
