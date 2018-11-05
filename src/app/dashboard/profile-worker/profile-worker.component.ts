import { Component, OnInit } from '@angular/core';
import { RecommendeService } from '@app/core/services/recommende.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Recommended } from '@app/core/models/model.recommended';
import { ListService } from '@app/core/services/list.service';


@Component({
    selector: 'app-profile-worker',
    templateUrl: './profile-worker.component.html',
    styleUrls: ['./profile-worker.component.scss']
})
export class ProfileWorkerComponent implements OnInit {

    Worker: Recommended;
    loader: boolean = true;
    phone: string;
    constructor(
        private RecommendService: RecommendeService,
        private route: ActivatedRoute,
        private ListService: ListService
    ) { }

    ngOnInit() {
        this.phone = this.route.snapshot.params.workerId;
        this.getUser();
    }

    private getUser(): void {
        this.RecommendService.findAll(`?telefono=${this.phone}`)
            .subscribe(worker => {
                this.Worker = worker[0];
                this.loader = false;
            })
    }

    addList() {
        this.ListService.create({
            telefono: this.phone,
            lista_id: 1
        }).subscribe(response => {
            console.log(response, 'Agregado');
        })
    }
}
