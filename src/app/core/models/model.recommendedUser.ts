
export default class RecommendedUser {
  private id: number;
  private nombres: string;
  private apellidos: string;
  private telefono: string;
  private distrito: string;
  private direccion: string;
  private descripcion: string;
  private foto: string;
  private oficio: string;

  constructor() {
    this.id = Math.floor(Math.random() * 1000);
    this.nombres = '';
    this.apellidos = '';
    this.telefono = '';
    this.distrito = '';
    this.direccion = '';
    this.oficio = '';
    this.descripcion = '';
    this.foto = '';
  }

  setFirstName(nombres: string) {
    this.nombres = nombres;
    return this;
  }

  setLastName(apellidos: string) {
    this.apellidos = apellidos;
    return this;
  }

  setPhone(telefono: string) {
    this.telefono = telefono;
    return this;
  }

  setDistrict(distrito: string) {
    this.distrito = distrito;
    return this;
  }

  setAddress(direccion: string) {
    this.direccion = direccion;
    return this;
  }

  setDescription(descripcion: string) {
    this.descripcion = descripcion;
    return this;
  }

  setPicture(foto: string) {
    this.foto = foto;
    return this;
  }

  setOffice(oficio: string) {
    this.oficio = oficio;
    return this;
  }

  build(): any {
    return {
      id: this.id,
      nombres: this.nombres,
      apellidos: this.apellidos,
      telefono: this.telefono,
      descripcion: this.descripcion,
      distrito: this.distrito,
      direccion: this.direccion,
      foto: this.foto,
      oficio: this.oficio
    }
  }

}
