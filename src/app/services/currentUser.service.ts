import { Injectable } from '@angular/core';
import { Role } from '../enums/role.enum';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  user: User = {
    id: 0,
    first_name: '',
    last_name: '',
    passport: 0,
    telephone: '',
    role_number: Role.intern
  };

  constructor() { }

}