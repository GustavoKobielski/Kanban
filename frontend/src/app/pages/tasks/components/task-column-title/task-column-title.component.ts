import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-task-column-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-column-title.component.html',
  styleUrl: './task-column-title.component.css',
})
export class taskColumnTitleComponent {
  @Input() title = ''
  @Input() count = 0
  @Input() backgroundColor = ''
  @Input() colorCount = ''
}
