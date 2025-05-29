import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { Priorites, Users } from '../../const/task-card.const'

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class taskCardComponent {
  @Input() priorites: Priorites[] = []
  @Input() title = ''
  @Input() description = ''
  @Input() users: Users[] = []
  @Input() comments: string[] = []
  @Input() completed = 0
}
