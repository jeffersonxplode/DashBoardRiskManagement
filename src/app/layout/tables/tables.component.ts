import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Risk} from '../risk/risk';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    riskOne: Risk = new Risk(1, 'Incendio', 'Ta pegando fogo bicho', 0.2, 20, 'Joga agua');
    riskTwo: Risk = new Risk(2, 'Inundaçao', 'Esta alagando tudo bicho', 0.1, 5, 'Bote salva vidas');
    riskThree: Risk = new Risk(3, 'Sem internet', 'Acabou a net', 0.01, 9, 'Espera voltar');
    riskFour: Risk = new Risk(4, 'Mouse Quebrado', 'Quebrou', 0.01, 1, 'Compra outro');
    risks: Risk[] = [this.riskOne, this.riskTwo, this.riskThree, this.riskFour];
    constructor() {}

    ngOnInit() {}
}
