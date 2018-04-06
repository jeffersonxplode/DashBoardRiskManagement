import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Risk} from '../risk/risk';
import {RiskService} from '../risk/risk.service';
import {Observable} from 'rxjs/Observable';


@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()],
    providers: [RiskService]
})
export class TablesComponent implements OnInit {

    risks: Risk[];
    errorMessage: string;

    constructor(
        private Riskservice: RiskService
    ) {}


    ngOnInit() {

        let timer = Observable.timer(0,5000)
        timer.subscribe(() => this.getRisks());
    }



    getRisks() {
        this.Riskservice.getRisks()
            .subscribe(
                risks => this.risks = risks,
                error => this.errorMessage = <any>error
            );
    }
}
