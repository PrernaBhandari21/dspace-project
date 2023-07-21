import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  selectedMetaTabChanged: EventEmitter<string> = new EventEmitter<string>();

  // For single sidemenu element to be emitted !!

  // emitSelectedMetaTab(metaTab: string) {
  //   this.selectedMetaTabChanged.emit(metaTab);
  // }

  emitSelectedMetaTab(tabElements : any) {
    console.log("tabElement selected are : ", tabElements);
    this.selectedMetaTabChanged.emit(tabElements);
  }
}
