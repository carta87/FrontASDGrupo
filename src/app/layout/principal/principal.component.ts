import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { archivo, Person, Machine, Purchuse, Active } from '../../core/models/Archivo.models';
import { ApiService } from '../../core/services/service.service';
import { Busqueda } from '../../core/models/Optiones';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})

export class PrincipalComponent {

  busqueda: number = 0;
  busquedaTipo: number = 0;
  busquedaFecha: Date;
  busquedaSerial: string;
  nameCity : String = "";
  namePosition: String = "";
  nameType: String = "";
  tipoActivo: String = "";


  showTableType: boolean = false;
  optionsBusqueda: Array<Busqueda>;

  archives: archivo[]= [];
  enviarObjecto: archivo = {
    id: null,
    company: null,
    box: null,
    bag: null,
    folder: null,
    document: null
  };

  person :Person ={
    id : null,
    name : null,
    identification: null
  }

  machine : Machine = {
    id: null,
    nameMachine : null,
    dimensions  : null,
    description  : null,
    serie  : null,
    nameInsideInventory  : null,
    value  : null,
    dataPurchuse  : null,
  }

  purchuse : Purchuse = {
    id: null,
    namePurchuse : null,
    dimensions  : null,
    description  : null,
    serie  : null,
    nameInsideInventory  : null,
    valueActive  : null,
    dataPurchuse  : null,
  }

  active : Active[]=[];
  activeTipe : Active[]=[];


  constructor(
    private apiService: ApiService,
    private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getArchives();
  }

  cargarSelectCiclo() {
    this.optionsBusqueda = [
        {value: 1, busqueda: 'Tipo'},
        {value: 2, busqueda: 'Fecha de Compra'},
        {value: 3, busqueda: 'Serial'},
    ]
  }

  getArchives(){

    this.apiService.getAllActive()
    .subscribe( data=>{
      this.active = data
    })

    this.apiService.getAllPerson()
    .subscribe( data=>{
      this.person = data
    })

    this.apiService.getAllPosition()
    .subscribe( data=>{
      this.namePosition = data
    })

    this.apiService.getAllCity()
    .subscribe( data=>{
      this.nameCity = data
    })

    this.apiService.getAllType()
    .subscribe( data=>{
      this.nameType = data
    })

    this.apiService.getByType(this.tipoActivo)
    .subscribe( data=>{
      this.nameType = data
    })

    this.apiService.getAllMachine()
    .subscribe( data=>{
      this.machine = data
    })

    this.apiService.getAllPurchuse()
    .subscribe( data=>{
      this.purchuse = data
    })
/*
    console.log(this.person);
    console.log(this.namePosition);
    console.log(this.nameCity);
    console.log(this.nameType);
    console.log(this.machine);
    console.log(this.purchuse);
    console.log(this.active);*/
  }

  searchType(busquedaTipo : number){
    if(busquedaTipo == 1 ){
      this.tipoActivo = "maquinaria";
      this.apiService.getByType(this.tipoActivo)
      .subscribe( data=>{
        this.activeTipe = data
      })
      alert("vas a consultar Maquinaria");
      this.showTableType = true;
      //console.log(this.busquedaTipo);
    }
    else if(busquedaTipo == 2){
      //alert("vas a consultar inmueble");
      this.tipoActivo = "Inmueble";
      this.apiService.getByType(this.tipoActivo)
      .subscribe( data=>{
        this.activeTipe = data
      })
      this.showTableType = true;
      //console.log(this.busquedaTipo);
    }
    else if(busquedaTipo == 3){
      //alert("vas a consultar Material de oficina");
      this.tipoActivo = "material oficina";
      this.apiService.getByType(this.tipoActivo)
      .subscribe( data=>{
        this.activeTipe = data
      })
      this.showTableType = true;
      //console.log(this.busquedaTipo);
    }
    else{
      alert("por favor ingrese un tipo valido");
      this.showTableType = false;
      //console.log(this.busquedaTipo);
    }

  }

  searchDate(busquedaFecha: Date){
    if(busquedaFecha){
      //alert("vas a consultar la fecha " + busquedaFecha);
      this.showTableType = true;
      //console.log(this.busquedaTipo);
    }else{
      alert("por favor ingrese un tipo valido");
      this.showTableType = false;
      //console.log(this.busquedaTipo);
    }
  }

  searchSerie(busquedaSerial: string){
    this.showTableType = true;
   // alert("vas a consultar por Serial "+ this.busquedaSerial);
    console.log(this.busquedaSerial);
    this.apiService.getBySerie(this.busquedaSerial)
      .subscribe( data=>{
        this.activeTipe = data
      })
  }

}
