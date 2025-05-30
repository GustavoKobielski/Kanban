import { Component, ViewChild } from '@angular/core'
import { ChartOptionsInterface } from './interfaces/home.interface'
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts'
import { CardInfoComponent } from './components/card-info/card-info.component'
import { HomeService } from './service/home.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardInfoComponent, NgApexchartsModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @ViewChild('chart') chart!: ChartComponent
  public lineChartOptions: Partial<ChartOptionsInterface>

  constructor(private homeService: HomeService) {
    this.lineChartOptions = this.homeService.getLineChartOptions()
  }
}
