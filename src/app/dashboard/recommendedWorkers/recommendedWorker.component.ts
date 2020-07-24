import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from '@app/core/services/auth.service';
import { JobsService } from '@app/core/services/jobs.service';
import { DistrictService } from '@app/core/services';
import { map, distinct, concatMap, pluck, toArray, finalize } from 'rxjs/operators';
import RecommendadoService from '@app/core/services/recomendados.service';

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
    jobs: any[] = [];
    districts: any[] = [];

    params: any = {};

    nameSearch: string = '';


    allRecommendeds: any[] = [];
    sizePage: number = 5;

    private recomendadoService = RecommendadoService.getInstance();
    private districtService = DistrictService.getInstance();
    private jobService = JobsService.getInstance();

    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.authService.subjectUser.subscribe(user => {
            this.user = user;
        });
        this.params = this.route.snapshot.queryParams;
        this.getJobs();
        this.getDistricts();
        this.findAll(this.toStringQuery());

    }


    private findAll(filter?): void {
        this.haverWorkers = false;
        this.listRecommendeds = [{}, {}, {}];
        this.recomendadoService.getRecomendados()
            .pipe(finalize(() => this.loader = false))
            .subscribe(response => {
                this.allRecommendeds = response;
                this.listRecommendeds = this.arrayByPaginate(0, this.sizePage);
                // if (!response.length) {
                //     this.haverWorkers = true;
                // }
            })
        // this.recommendeService.findAll(filter)
        // .pipe(finalize(() => this.loader = false))
        // .subscribe(list => {
        //     this.allRecommendeds = list.reverse();
        //     this.listRecommendeds = this.arrayByPaginate(0, this.sizePage);
        //     if (!list.length) {
        //         this.haverWorkers = true;
        //     }
        // })
    };


    private getJobs() {
        let jobQueryUrl = this.params.oficio;
        this.jobService.findAll()
            .pipe(concatMap(jobs => from(jobs)))
            .pipe(pluck('nombre'))
            .pipe(distinct())
            .pipe(map(job => this.itemFilter(job, jobQueryUrl)))
            .pipe(toArray())
            .subscribe(jobs => {
                this.jobs = this.orderArray(jobs);
            });
    }
    private getDistricts() {
        let districtQueryUrl = this.params.distrito;
        this.districtService.findAll()
            .pipe(concatMap(districts => from(districts)))
            .pipe(pluck('nombre'))
            .pipe(distinct())
            .pipe(map(district => this.itemFilter(district, districtQueryUrl)))
            .pipe(toArray())
            .subscribe(districts => {
                this.districts = this.orderArray(districts);
            });
    }
    private itemFilter(name, query) {
        return {
            nombre: name,
            selected: query === name ? true : false
        }
    }
    private orderArray(list) {
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

    private arrayByPaginate(page: number = 0, pageSize) {
        return this.allRecommendeds.slice(pageSize * page, pageSize * page + pageSize);
    }

    private buildQueryParamsRequest(): string {
        let districtSelected = this.districts.filter(district => district.selected);
        let jobSelected = this.jobs.filter(district => district.selected);
        let nameQuery = this.nameSearch;

        let queryArray = [];

        if (districtSelected.length) {
            queryArray = queryArray.concat(districtSelected.map(item => `distrito[nombre]=${item.nombre}`));
        }
        if (jobSelected.length) {
            queryArray = queryArray.concat(jobSelected.map(item => `oficio[nombre]=${item.nombre}`));
        }
        if (nameQuery.length) {
            queryArray = queryArray.concat([`nombres=${nameQuery}`]);
        }
        return queryArray.length ? `?${queryArray.join('&')}` : '';
    }

    onSelectedItem(item) {
        item.selected = !item.selected;
    }

    onSearch() {
        const query = this.buildQueryParamsRequest();
        this.findAll(query);
    }

    onChangePage(pageEvent) {
        this.listRecommendeds = this.arrayByPaginate(pageEvent.pageIndex, pageEvent.pageSize);
    }

}
