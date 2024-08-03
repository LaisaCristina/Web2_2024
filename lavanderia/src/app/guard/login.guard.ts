import { CanActivateFn } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

export const loginGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('usuario') == null){
    return false;
  } else {
    return true;
  }
};
