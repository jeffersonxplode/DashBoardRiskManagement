import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Risk} from '../risk/risk';
import {RiskService} from '../risk/risk.service';
import {Observable} from 'rxjs/Observable';
import {Route, Router} from '@angular/router';


@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()],
    providers: [RiskService],
})
export class TablesComponent implements OnInit {

    risks: Risk[];
    errorMessage: string;
    nivelrisco: string;

    constructor(
        private Riskservice: RiskService,
        private router: Router
    ) {}


    ngOnInit() {

        const timer = Observable.timer(0, 5000);
        timer.subscribe(() => this.getRisks());
    }



    getRisks() {
        this.Riskservice.getRisks()
            .subscribe(
                risks => this.risks = risks,
                error => this.errorMessage = <any>error
            );
    }

    goToShow (risk: Risk): void {

        const link = ['/risk', risk.id];
        this.router.navigate(link);

    }

}
