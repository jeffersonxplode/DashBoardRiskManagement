import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Risk } from './risk';


@Injectable()

    export class RiskService{
        private riskUrl = 'http://localhost:3000/risk_docs';

        constructor(
            private http: Http
        ) {}

        getRisks(): Observable<Risk[]>{
            return this.http.get(this.riskUrl)
                .map((response: Response) => {
                    return <Risk[]>response.json();
                })
                .catch(this.handleError);
        }


        getRisk(id: number) {

            return this.http.get(this.riskUrl + '/' + id + '.json');

        }


        createRisk(risk) {

            risk.severity = risk.probability_of_happen * risk.impact;
            if (risk.severity >= 1) {
                risk.severity_str = 'extremo';
            }
            if (risk.severity > 0.1 && risk.severity < 1){
                risk.severity_str = 'alto';
            }
            if (risk.severity > 0.05 && risk.severity <= 0.09){
                risk.severity_str = 'moderado';
            }
            if (risk.severity <= 0.05) {
                risk.severity_str = 'baixo';
            }

            let headers = new Headers({'Content-Type': 'application/json'});
            let options = new RequestOptions({ headers: headers});

            return this.http.post(this.riskUrl, JSON.stringify(risk), {headers: headers}).map((res: Response) => res.json());
        }


        private handleError (error: Response | any) {
            // In a real world app, we might use a remote logging infrastructure
            let errMsg: string;
            if (error instanceof Response) {
                const body = error.json() || '';
                const err = body.error || JSON.stringify(body);
                errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            } else {
                errMsg = error.message ? error.message : error.toString();
            }
            console.error(errMsg);
            return Observable.throw(errMsg);
        }
    }

