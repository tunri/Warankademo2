import {Component, Input, OnInit} from '@angular/core';
import {Recommended} from '@app/core/models/model.recommended';

@Component({
    selector: 'app-worker',
    templateUrl: './worker.component.html',
    styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {

    @Input() worker: Recommended;

    constructor() {
    }

    ngOnInit() {
    }

}
