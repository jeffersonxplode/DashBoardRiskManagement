import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Risk } from '../risk/risk';
import { RiskService } from '../risk/risk.service';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    providers:[RiskService],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    risk = new Risk();
    submitted = false;

    constructor(
        private riskService: RiskService
    ) {}

    createRisk(risk){

        this.submitted = true;
        this.riskService.createRisk(risk)
            .subscribe(
                data => {return true},
                error => {
                    console.log('Error Saving Proposal')
                    return Observable.throw(error);
                }
            );
    }

    ngOnInit() {}
}
