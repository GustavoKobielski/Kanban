interface TASK_COLUMN_TITLE {
  title: string
  count: number
  backgroundColor: string
  countColor: string
}

export const TASK_COLUMN_TITLES: readonly TASK_COLUMN_TITLE[] = [
  {
    title: 'In Progress',
    count: 25,
    backgroundColor: '#4F46E5',
    countColor: '#4F46E5',
  },
  {
    title: 'Reviewed',
    count: 8,
    backgroundColor: '#F59E0B',
    countColor: '#F59E0B',
  },
    {
    title: 'Completed',
    count: 2,
    backgroundColor: '#22C55E',
    countColor: '#22C55E',
  }
] as const
