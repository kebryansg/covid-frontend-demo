import {Component, OnDestroy, OnInit} from '@angular/core';
import {FirebaseService} from "../../../shared/service/firebase.service";
import {Subscription} from "rxjs";
import {map} from "rxjs/operators";
import * as lodash from 'lodash'

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit, OnDestroy {

  private unsubs$: Subscription = new Subscription();
  positionCenter = {
    latitude: -1.025252,
    longitud: -79.466919
  };

  resumen: any = {};

  lsPositionEnfermos: any[];

  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.escucharCambios()
  }

  ngOnDestroy(): void {
    this.unsubs$.unsubscribe();
  }

  escucharCambios() {
    this.unsubs$ = this.firebaseService.getItems('Register')
      .pipe(
        map(results => results.map((row: any) => ({...row.data, id: row.id})))
      )
      .subscribe(results => {
        this.lsPositionEnfermos = results;
        // console.log(results);

        const groupEstadoPaciente = lodash.groupBy(this.lsPositionEnfermos, 'estadadoPaciente');
        this.resumen.EstadosPaciente = lodash.transform(groupEstadoPaciente, (result, value, key) => {
          result.push({
            Estado: key,
            Count: value.length,
          });
        }, []);

        // console.log('Resumen: ', this.resumen)
      })
  }

}
