import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Unicorn } from '../models/unicorn.model';
import { ResourceService } from './resource.service';

@Injectable({ providedIn: 'root' })
export class UnicornsService extends ResourceService<Unicorn> {
  constructor(private http: HttpClient) {
    super(
      http,
      Unicorn,
      // SEE: https://crudcrud.com/
      `https://crudcrud.com/api/9d5d443ffce9481581e177e7cb396ac9/unicorns`
    );
  }
}
