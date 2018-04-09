import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})


export class FilterPipe implements PipeTransform {

  transform(risks: any, nivelrisco: any): any {

      // check if search term is undefined

      if (nivelrisco === undefined) {return risks; }

      return risks.filter(function(risk) {

          return risk.severity_str.includes(nivelrisco);

      });
  }

}
