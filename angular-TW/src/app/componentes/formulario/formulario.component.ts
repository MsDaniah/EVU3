import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioService } from 'src/app/servicios/formulario.service';

//import { FormularioService } from '../../servicios/formulario.service'
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario:any;
  usuario:any;
  usuarios:any;
  registro_enviar = {
    nombre:'',
    apellido:'',
    rut:null,
    correo:'',
    contrasena:''
  }
  registros:any;
  constructor(
    private formularioSrv:FormularioService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre:['',[Validators.required]],
      apellido:[''],
      rut:[''],
      correo:[''],
      contrasena:[''],
    });
  }

  //obtener los las validaciones
  get formularioReactivo(){
    return this.formulario.controls;
  }

  botonEnviar(){
    this.registro_enviar.nombre = this.formularioReactivo.nombre.value
    this.registro_enviar.apellido = this.formularioReactivo.apellido.value
    this.registro_enviar.rut = this.formularioReactivo.rut.value
    this.registro_enviar.correo = this.formularioReactivo.correo.value
    this.registro_enviar.contrasena = this.formularioReactivo.contrasena.value

    this.formularioSrv.crear_registro(this.registro_enviar).subscribe(
      (response:any) => {
        this.usuarios = response.usuario;
        console.log("Los datos recibidos son")
        console.log(this.usuarios)
      }, error =>{
        console.log(error)
      }
    )
    //console.log(this.formularioReactivo);
  }

  obtenerRegistro(){
    this.formularioSrv.obtener_registros().subscribe(
      (response:any) => {
        this.usuarios = response.usuarios;
        console.log(this.usuarios);

      }, error => {
        console.log(error)
      }
    )
  }

  eliminar(id:any){
    console.log(id)
  }
}
