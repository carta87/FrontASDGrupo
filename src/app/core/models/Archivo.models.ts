export interface archivo{
  id:number;
  company : string;
  box  : string;
  bag : string;
  folder : string;
  document : string;
}

export interface Person{
  id:number;
  name : string;
  identification  : string;
}

export interface Machine{
  id:number;
  nameMachine : string;
  dimensions  : string;
  description  : string;
  serie  : string;
  nameInsideInventory  : string;
  value  : string;
  dataPurchuse  : string;
}

export interface Purchuse{
  id:number;
  namePurchuse : string;
  dimensions  : string;
  description  : string;
  serie  : string;
  nameInsideInventory  : string;
  valueActive  : string;
  dataPurchuse  : string;
}

export interface Active{
  id:number;
  type : string;
  city : string;
  nameEmployee : string;
  idEmployee : number;
  positionResponsible : string;
  name : string;
  description : string;
  tall  : string;
  serial  : string;
  numberInsideInventory  : string;
  valueActive  : number;
  datePurchuse  : Date;
}

export interface Employee{
  id:number;
  nameEmployee : string;
  idEmployee : number;
}

