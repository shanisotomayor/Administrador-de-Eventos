export interface Event {
  id?: string;
  title: string;
  date: string;
  time: string;
  category: string;
  description: string;
  status: 'programado' | 'completado';
  userId?: string;
}
