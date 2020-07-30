import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reclutamientoenacment';

  //Declaro las variables globales que serviran para enviar datos a la vista
  numeroIngresado: 0;
  clase = '';
  multiplo = '';
  multiplosArray = [];
  resultado= 0;
  bool = true;

  //Funcion que se ejecuta una vez se da click al boton que actua como submit
  // Recibo como parametro de entrada el numero ingresado por el usuario
  onSubmit(multiploForm){
    this.numeroIngresado = multiploForm.value.numero //Asigno el valor a una variable

    //Estas son las validaciones donde uso el operador de residuo % para saber de que numero son divisores, tiene que ser cero el resultado
    if(this.numeroIngresado % 3 == 0){
      this.multiplosArray = []; //Mando el arreglo a vacio por si ya traia valores anteriormente
      this.clase = 'verde'; //asigno la clase declarada en el archivo css
      //analizo si tambien es multiplo de 5 con un operador ternario, en caso contrario mando falso para entrar a la siguiente condicional y saber si es multiplo de 7
      this.numeroIngresado % 3 == 0 && this.numeroIngresado % 5 == 0 ? (this.multiplo = '[3 y 5]', this.bool = true) : this.bool = false;
      if(this.bool == false){
        this.numeroIngresado % 3 == 0 && this.numeroIngresado % 7 == 0 ? this.multiplo = '[3 y 7]' : this.multiplo = '[3]';
      }
      let div = this.numeroIngresado / 3; //guardo en una variable hasta que numero debo multiplicar para que el ultimo valor coincida con el numero ingresado por el usuario
      for (let index = 1; index <= div; index++) {
        let num = 3 * index;
        this.multiplosArray.push(num); //agrego cada resultado al arreglo con el metodo push
      }
    }else if (this.numeroIngresado % 5 == 0){
      this.multiplosArray = [];
      this.clase = 'rojo'
      this.numeroIngresado % 5 == 0 && this.numeroIngresado % 7 == 0 ? this.multiplo = '[5 y 7]' : this.multiplo = '[5]';
      let div = this.numeroIngresado / 5;
      for (let index = 1; index <= div; index++) {
        let num = 5 * index;
        this.multiplosArray.push(num);
      }
    } else if (this.numeroIngresado % 7 == 0) {
      this.multiplosArray = [];
      this.clase = 'azul'
      this.multiplo = '[7]';
      let div = this.numeroIngresado / 7;
      for (let index = 1; index <= div; index++) {
        let num = 7 * index;
        this.multiplosArray.push(num);
      }
    }
  }
}
