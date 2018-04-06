import { Component, OnInit } from '@angular/core';
import {RiskService} from './risk/risk.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    providers: [RiskService]
})
export class LayoutComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
