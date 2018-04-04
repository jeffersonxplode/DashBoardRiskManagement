import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Risk} from '../risk/risk';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    risk = new Risk();
    constructor() {}

    ngOnInit() {}
}
