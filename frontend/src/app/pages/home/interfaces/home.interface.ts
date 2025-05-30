// filepath: c:\Users\Gustavo\Kanban\frontend\src\app\pages\home\interfaces\home.interface.ts
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexLegend,
} from 'ng-apexcharts'

export interface ChartOptionsInterface {
  series: ApexAxisChartSeries
  chart: ApexChart
  xaxis: ApexXAxis
  dataLabels: ApexDataLabels
  grid: ApexGrid
  stroke?: ApexStroke
  title?: ApexTitleSubtitle
  plotOptions?: ApexPlotOptions
  colors?: string[]
  legend?: ApexLegend
}
