import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [],
  templateUrl: './card-info.component.html',
})
export class CardInfoComponent {
  @Input() title = ''
  @Input() description = false
  @Input() totalTasks = 0
  @Input() inProgressTasks = 0
  @Input() reviewedTasks = 0
  @Input() completedTasks = 0
}
