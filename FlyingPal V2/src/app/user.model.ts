// user.model.ts
export interface User {
    username: string;
    correo: string;
    phone: string;
    password: string;
    confirmPassword?: string; // Este campo podría ser opcional
    
  }