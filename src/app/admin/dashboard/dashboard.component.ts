import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexXAxis,
  
} from "ng-apexcharts";

export type chartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions1: Partial<ChartOptions> | any;
  public chartOptions2: Partial<ChartOptions> | any;


  ngOnInit(){
    this.chartOptions1 = {
      series: [
        {
          name: "distibuted",
          data: [2100, 2002, 1900, 2800, 8916, 7721, 90000, 1010, 9192, 10982, 1899, 12029]
        }
      ],
      chart: {
        height: 350,
        width: 500,
        type: "bar",
        events: {
          click: function (chart: any, w: any, e: any) {
            // console.log(chart, w, e)
          }
        },
        toolbar: {
          show: false,
        }
      },
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
    
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [
          ["January"],
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
    
        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8",
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
            ],
            fontSize: "12px"
          }
        }
      }
    };


    this.chartOptions2 = {
      series: [210, 202, 100, 280, 71],
      chart: {
        height: 350,
        width: 450,
        type: "pie",
      },
      labels: ["Criminal Cases", "Civil Cases", "Family Cases", "Traffic Violations", "Others"],
      colors: ["#28BFFB", "#20FFB6", "#FED839", "#FF657F", "#97B5F0", "#748F9A", "#46C6BA"] ,
      legend: {
        show: true,
        position: "bottom",
      },
    };
  
  }


  
}
