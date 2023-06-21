import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z-A-Z]{2,4}$';
  phonePattern = '^(\\+34|0034|34)?[6789]\\d{8}$';
}
