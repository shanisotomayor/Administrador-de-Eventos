export interface Event {
  id?: string;
  title: string;
  date: string;
  time: string;
  description: string;
  status: 'programado' | 'completado';

  categoryId: string;   
  userId?: string;
}
