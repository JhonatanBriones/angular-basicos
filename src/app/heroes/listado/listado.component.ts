import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroeBorrado:string="";
  heroes:string[]=['Hulk','Thor','Goku','Vegeta'];
  borrarHeroe=()=>{
    // this.heroes=this.heroes.slice(0,3);
    // this.heroes.splice(1,1);
    this.heroeBorrado=this.heroes.shift()||"";
  }
}
