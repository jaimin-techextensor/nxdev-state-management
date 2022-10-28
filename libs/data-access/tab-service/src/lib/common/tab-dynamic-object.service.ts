import { Injectable } from '@angular/core';

@Injectable()

export class TabDynamicObjectService {

  constructor() { }

  createDynamicData(obj: any) {
    return this.formatArray(obj);
  }

  private formatArray(input: any) {
    if (input !== null) {
      const newObj = Object.keys(input).map(key => {
        let Value: any = '';
        if (typeof input[key] === 'object') {
          if (key === 'Container') {
            Value = JSON.stringify(input[key]);
          } else if (key === 'Setting_Value') {
            Value = JSON.stringify(input[key]);
          } else if (key === 'Child_Relationship') {
            Value = JSON.stringify(input[key]);
          } else if (key === 'ScreenConfiguration') {
            Value = JSON.stringify(input[key]);
          } else {
            Value = this.formatArray(input[key]);
          }
        } else {
          Value = input[key];
        }
        return { AppFieldID: key, Value };
      });
      return newObj;
    }
    return null;
  }

  removeBlankValue(objList: any) {
    let newList = [];
    for (let data of objList) {
      if (typeof data.Value != 'boolean') {
        if (data.Value) {
          if (typeof data.Value == 'object') {
            if (data.Value.length) {
              newList.push(data);
            }
          } else {
            newList.push(data);
          }
        }
      }
      else {
        newList.push(data);
      }
    }
    return newList;
  }
}
