import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  nombreUrl: string;
  urlShort:string;
  urlProcesada:boolean;
  loading:boolean;
  mostrarError:boolean;
  textError:string;

  constructor(private _shortUrlService: ShortUrlService) { 
    this.nombreUrl="";
    this.urlShort="";
    this.urlProcesada=false;
    this.loading=false;
    this.mostrarError=false;
    this.textError=""
  }

  ngOnInit(): void {
  }
   procesarUrl(){


    /* validar si la url es vacia */

    if(this.nombreUrl== ""){
      this.error("ingrese una Url")
       

      return;
    }
     this.urlProcesada= false;
     this.loading=true;
      setTimeout(()=>{
        this.obtenerUrlShort();
      },2000);


     

     
     }
     obtenerUrlShort(){
      this._shortUrlService.getUrlShort(this.nombreUrl).subscribe(data=>{
       
       
        this.urlProcesada = true;
        this.urlShort = data.link
        this.loading=false;
      },error=>{
        this.loading=false;
        this.nombreUrl=""
        if (error.error.description==="The value provided is invalid.") {
          this.error('La url ingresada es invalida')
          
        }
      })
   }
   error(valor:string){
    this.mostrarError=true;
    this.textError=valor;
    /* mostrar error solo por 4 segundos */
    setTimeout(() => {
      this.mostrarError=false
    }, 4000);

   }

}
