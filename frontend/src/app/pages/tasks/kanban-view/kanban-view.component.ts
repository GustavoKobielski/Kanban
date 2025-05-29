import { Component } from '@angular/core'
import { taskColumnTitleComponent } from '../components/task-column-title/task-column-title.component'
import { TASK_COLUMN_TITLES } from '../const/kanban-view.const'
import { taskCardComponent } from '../components/task-card/task-card.component'
import { tasks } from '../mock/tasks.mock'

@Component({
  selector: 'app-kanban-view',
  standalone: true,
  imports: [taskColumnTitleComponent, taskCardComponent],
  templateUrl: './kanban-view.component.html',
  styleUrl: './kanban-view.component.css',
})
export class KanbanViewComponent {
  TASK_COLUMN_TITLES = TASK_COLUMN_TITLES

  tasks = tasks

  getTasksByColumn(columnKey: string) {
    return this.tasks.filter((task) => task.column === columnKey)
  }
}
