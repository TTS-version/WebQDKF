import { Component, Output, EventEmitter } from "@angular/core";


@Component({
    selector:'student',
    inputs:['name'],
    template:`
        <p (click)="onClicked()">{{name}}</p>
    
    `
})

export class Student{
     name:string;
     @Output() studentSelected: EventEmitter<string>;//声明事件触发器
    constructor(){
        this.studentSelected = new EventEmitter();
    }
    onClicked(){
        this.studentSelected.emit(this.name);
    }

}