export interface Event {
  id?: string;
  nombre: string;
  fecha: string;    // 'YYYY-MM-DD'
  horaInicio?: string; // 'HH:mm'
  categoria: string;
  descripcion?: string;
  userId: string;   // UID del creador
}
