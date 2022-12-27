import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{

    @Input() title: string = 'Sin título';

     // Doughnut
     public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
     public doughnutChartData: ChartData<'doughnut'> = {
       labels: this.doughnutChartLabels,
       datasets: [
         { data: [ 350, 450, 100 ] }
       ]
     };
     
     // public colors: Color[] = [
     //   { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
     // ];
 
     // events
     public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
       console.log(event, active);
     }
   
     public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
       console.log(event, active);
     }

}
