import IBuilder from "../interfaces/IBuilder";
import RecommendedUser from "./model.recommendedUser";
import { Job } from "./model.job";
import { District } from "./model.district";

export default class RecommendedUserBuilder implements IBuilder<RecommendedUser> {

    private id: number;
    private nombres: string;
    private apellidos: string;
    private telefono: string;
    private direccion: string;
    private descripcion: string;
    private foto: string;
    private distrito: District;
    private oficio: Job;

    constructor() {
        this.id = Math.floor(Math.random() * 1000);
        this.nombres = '';
        this.apellidos = '';
        this.telefono = '';
        this.direccion = '';
        this.descripcion = '';
        this.foto = '';
        this.distrito = null;
        this.oficio = null;
    }

    setId(id: number) {
        this.id = id;
        return this;
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

    setDistrict(distrito: District) {
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

    setOffice(oficio: Job) {
        this.oficio = oficio;
        return this;
    }

    build(): RecommendedUser {
        const user = new RecommendedUser()
        user.setId(this.id);
        user.setNombres(this.nombres);
        user.setApellidos(this.apellidos);
        user.setTelefono(this.telefono);
        user.setDescripcion(this.descripcion);
        user.setDistrito(this.distrito);
        user.setOficio(this.oficio);
        user.setFoto(this.foto);
        user.setDireccion(this.direccion);
        // user.id = this.id;
        // user.nombres = this.nombres;
        // user.apellidos = this.apellidos;
        // user.telefono = this.telefono;
        // user.descripcion = this.descripcion;
        // user.distrito = this.distrito;
        // user.direccion = this.direccion;
        // user.foto = this.foto;
        // user.oficio = this.oficio;
        return user;
    }
}
