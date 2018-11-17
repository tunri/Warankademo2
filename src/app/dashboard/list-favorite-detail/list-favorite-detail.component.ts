import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '@app/core/services/list.service';

@Component({
    selector: 'app-list-favorite-detail',
    templateUrl: './list-favorite-detail.component.html',
    styleUrls: ['./list-favorite-detail.component.scss']
})
export class ListFavoriteDetailComponent implements OnInit {
    listId: any;
    List: any;
    loader: boolean = true;
    workers: any[] = [];
    constructor(
        private route: ActivatedRoute,
        private ListService: ListService
    ) {
        this.listId = this.route.snapshot.params.id;
    }

    ngOnInit() {
        this.getDetailList();
    }

    getDetailList(): void {
        this.ListService.findOne(this.listId).subscribe(result => {
            this.List = result[0];
            this.workers = this.List.lista_recomendados;
            this.loader = false;
        })
    }

}
