import { District } from "./model.district";
import { Job } from "./model.job";

export default class RecommendedUser {

    private id: number;
    private nombres: string;
    private apellidos: string;
    private telefono: string;
    private direccion: string;
    private descripcion: string;
    private foto: string;
    private distrito: District;
    private oficio: Job;

    constructor() { }

    setId(id: number) {
        this.id = id;
    };

    setNombres(name: string) {
        this.nombres = name;
    }

    setApellidos(apellidos: string) {
        this.apellidos = apellidos;
    }

    setTelefono(telefono: string) {
        this.telefono = telefono;
    }

    setDescripcion(descripcion: string) {
        this.descripcion = descripcion;
    }

    setDireccion(direccion: string) {
        this.direccion = direccion;
    }

    setFoto(foto: string) {
        this.foto = foto;
    }

    setDistrito(distrito: District) {
        this.distrito = distrito;
    }

    setOficio(oficio: Job) {
        this.oficio = oficio;
    }


    getId(): number {
        return this.id;
    }

    getNombres(): string {
        return this.nombres;
    }

    getApellidos(): string {
        return this.apellidos;
    }

    getTelefono(): string {
        return this.telefono;
    }

    getDireccion(): string {
        return this.direccion;
    }

    getDescripcion(): string {
        return this.descripcion;
    }

    getFoto(): string {
        return this.foto;
    }

    getDistrito(): District {
        return this.distrito;
    }

    getOficio(): Job {
        return this.oficio;
    }



    // private _id: number;
    // private _nombres: string;
    // private _apellidos: string;
    // private _telefono: string;
    // private _direccion: string;
    // private _descripcion: string;
    // private _foto: string;
    // private _distrito: District;
    // private _oficio: Job;


    // constructor() { }

    // public get id(): number {
    //     return this._id;
    // }
    // public set id(value: number) {
    //     this._id = value;
    // }

    // public get nombres(): string {
    //     return this._nombres;
    // }
    // public set nombres(value: string) {
    //     this._nombres = value;
    // }

    // public get apellidos(): string {
    //     return this._apellidos;
    // }
    // public set apellidos(value: string) {
    //     this._apellidos = value;
    // }

    // public get telefono(): string {
    //     return this._telefono;
    // }
    // public set telefono(value: string) {
    //     this._telefono = value;
    // }

    // public get distrito(): District {
    //     return this._distrito;
    // }
    // public set distrito(value: District) {
    //     this._distrito = value;
    // }

    // public get direccion(): string {
    //     return this._direccion;
    // }
    // public set direccion(value: string) {
    //     this._direccion = value;
    // }

    // public get oficio(): Job {
    //     return this._oficio;
    // }
    // public set oficio(value: Job) {
    //     this._oficio = value;
    // }

    // public get descripcion(): string {
    //     return this._descripcion;
    // }
    // public set descripcion(value: string) {
    //     this._descripcion = value;
    // }

    // public get foto(): string {
    //     return this._foto;
    // }
    // public set foto(value: string) {
    //     this._foto = value;
    // }

}
