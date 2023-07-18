import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  selectedMetaTabChanged: EventEmitter<string> = new EventEmitter<string>();

  emitSelectedMetaTab(metaTab: string) {
    this.selectedMetaTabChanged.emit(metaTab);
  }
}
