import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'farenheit'})

export class FarenheitPipe implements PipeTransform{
 transform(valor: number, args: any){
    return valor*(9/5)+32+"F";
 }
}