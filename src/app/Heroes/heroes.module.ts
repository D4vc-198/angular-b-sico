import { NgModule } from '@angular/core';
import { HeroeComponent } from './Heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent,
        HeroeComponent
    ],
    imports: [
        CommonModule,
    ]
})

export class HeroesModule {

}