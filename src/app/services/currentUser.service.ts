import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  user: User = { id: 0, first_name: '', last_name: '', passport: 0, telephone: '', role_number: 2 };

  constructor() { }
  
}