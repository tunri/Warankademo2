import {Component, OnInit} from '@angular/core';
import {Recommended} from '@app/core/models/model.recommended';
import {RecommendeService} from '@app/core/services/recommende.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-recommended-worker',
    templateUrl: './recommendedWorker.component.html',
    styleUrls: ['./recommendedWorker.component.scss']
})
export class RecommendedWorkersComponent implements OnInit {

    listRecommendeds: any[] = [];
    loader: boolean = true;

    constructor(
        private recommendeService: RecommendeService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.findAll();
    }

    findAll(): void {
        this.listRecommendeds = [{}, {}, {}];
        const query = this.toStringQuery();
        this.recommendeService.findAll(query).subscribe(list => {
            this.listRecommendeds = list;
            //this.loader = false;
        }, error => {
            this.loader = false;
            console.log('error');
        });
    }

    private toStringQuery(): string {
        const qp = this.route.snapshot.queryParams;
        const querystring = Object.keys(qp).map(q => `${q}[nombre]=${qp[q]}`).join('&');
        return (!!querystring.length) ? `?${querystring}` : '';
    }

}
