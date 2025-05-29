import { Component } from '@angular/core'
import { TASK_COLUMN_TITLES } from '../const/kanban-view.const'
import { taskColumnTitleComponent } from '../components/task-column-title/task-column-title.component'
import { taskCardComponent } from '../components/task-card/task-card.component'
import { tasks } from '../mock/tasks.mock'

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [taskColumnTitleComponent, taskCardComponent],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css',
})
export class ListViewComponent {
  TASK_COLUMN_TITLES = TASK_COLUMN_TITLES
  tasks = tasks

  getTasksByColumn(columnKey: string) {
    return this.tasks.filter((task) => task.column === columnKey)
  }
}
