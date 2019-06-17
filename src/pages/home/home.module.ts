import { IonicPageModule } from 'ionic-angular/module' ;
import { NgModule } from '@angular/core';
import { HomePage } from './home';

@NgModule({
    //Toda pagina tem isso aqui abaixo, inclusive vai ser importado automaticamente pelo IonicCLI
    declarations: [HomePage],
    imports: [IonicPageModule.forChild(HomePage)]
})

export class HomeModule {}