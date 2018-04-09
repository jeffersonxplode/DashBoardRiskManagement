import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Risk} from './risk';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {RiskService} from './risk.service';
import { routerTransition } from '../../router.animations';


@Component({
    selector: 'app-risk-show',
    templateUrl: 'risk-show.component.html',
    styleUrls: ['risk-show.component.scss'],
    providers: [RiskService],
    animations: [routerTransition()],

})

export class RiskShowComponent implements OnInit {


    constructor(
        private route: ActivatedRoute,
        private riskservice: RiskService,
        private http: Http
    ) {}

    @Input()
    risk: Risk;

    ngOnInit(): void {

        const riskRequest = this.route.params
            .flatMap((params: Params) =>
                this.riskservice.getRisk(+params['id'])
            );
        riskRequest.subscribe(response => this.risk = response.json());
    }



}
