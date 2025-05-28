import { Component } from '@angular/core'
import { taskColumnTitleComponent } from '../components/task-column-title/task-column-title.component'
import { TASK_COLUMN_TITLES } from '../const/kanban-view.const'
import { TaskCardComponent } from '../components/task-card/task-card.component'

@Component({
  selector: 'app-kanban-view',
  standalone: true,
  imports: [taskColumnTitleComponent, TaskCardComponent],
  templateUrl: './kanban-view.component.html',
  styleUrl: './kanban-view.component.css',
})
export class KanbanViewComponent {
  TASK_COLUMN_TITLES = TASK_COLUMN_TITLES

  tasks = [
    {
      priorites: [
        { text: 'Alta', color: '#F43F5E', backgroundColor: '#FFF1F2' },
      ],
      title: 'Implementar autenticação',
      description: 'Adicionar autenticação de usuário usando JWT.',
      users: [{ name: 'João', image: 'avatar1.png' }],
      comments: ['Verificar integração com backend.'],
      completed: 1,
      column: 'In Progress',
    },
    {
      priorites: [
        { text: 'Alta', color: '#F43F5E', backgroundColor: '#FFF1F2' },
      ],
      title: 'Implementar autenticação',
      description: 'Adicionar autenticação de usuário usando JWT.',
      users: [{ name: 'João', image: 'avatar1.png' }],
      comments: ['Verificar integração com backend.'],
      completed: 1,
      column: 'In Progress',
    },
    {
      priorites: [
        { text: 'Alta', color: '#F43F5E', backgroundColor: '#FFF1F2' },
      ],
      title: 'Implementar autenticação',
      description: 'Adicionar autenticação de usuário usando JWT.',
      users: [{ name: 'João', image: 'avatar1.png' }],
      comments: ['Verificar integração com backend.'],
      completed: 1,
      column: 'In Progress',
    },
    {
      priorites: [
        { text: 'Alta', color: '#F43F5E', backgroundColor: '#FFF1F2' },
      ],
      title: 'Implementar autenticação',
      description: 'Adicionar autenticação de usuário usando JWT.',
      users: [{ name: 'João', image: 'avatar1.png' }],
      comments: ['Verificar integração com backend.'],
      completed: 1,
      column: 'In Progress',
    },
    {
      priorites: [
        { text: 'Alta', color: '#F43F5E', backgroundColor: '#FFF1F2' },
      ],
      title: 'Implementar autenticação',
      description: 'Adicionar autenticação de usuário usando JWT.',
      users: [{ name: 'João', image: 'avatar1.png' }],
      comments: ['Verificar integração com backend.'],
      completed: 1,
      column: 'In Progress',
    },

    {
      priorites: [
        { text: 'Média', color: '#F59E0B', backgroundColor: '#FFFBEB' },
      ],
      title: 'Criar layout Kanban',
      description: 'Desenvolver o layout responsivo para o quadro Kanban.',
      users: [{ name: 'Maria', image: 'avatar2.png' }],
      comments: ['Ajustar cores conforme o design system.'],
      completed: 2,
      column: 'Reviewed',
    },
    {
      priorites: [
        { text: 'Baixa', color: '#22C55E', backgroundColor: '#F0FDF4' },
      ],
      title: 'Documentar API',
      description: 'Escrever documentação das rotas da API.',
      users: [{ name: 'Carlos', image: 'avatar3.png' }],
      comments: ['Usar padrão OpenAPI.'],
      completed: 3,
      column: 'Completed',
    },
  ]

  getTasksByColumn(columnKey: string) {
    return this.tasks.filter((task) => task.column === columnKey)
  }
}
