import { Injectable } from '@angular/core';

@Injectable()

export class TabFormService {

  constructor() { }

  setFormData(data: any) {
    let objNew: any = {};
    if (!!data && !!data.Result) {
      Object.entries(data.Result[0]).forEach(([key, value]) => {
        if (key !== undefined) {
          if (typeof value === 'number') {
            value = value.toString();
          }
          if (key == 'Logo') {
            if (value !== '' && value !== null && value !== undefined) {
            }
          } else {
            objNew[key] = value;
          }
        }
      });
    }
    return objNew;
  }
}
