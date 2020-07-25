import IBuilder from "../interfaces/IBuilder";
import RecommendedUser from "./model.recommendedUser";

export default class RecommendedUserBuilder implements IBuilder<RecommendedUser> {

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

    build(): RecommendedUser {
        const user = new RecommendedUser()
        user.id = this.id;
        user.nombres = this.nombres;
        user.apellidos = this.apellidos;
        user.telefono = this.telefono;
        user.descripcion = this.descripcion;
        user.distrito = this.distrito;
        user.direccion = this.direccion;
        user.foto = this.foto;
        user.oficio = this.oficio;
        return user;
    }
}
