import IBuilder from "../interfaces/IBuilder";

export default class RecommendedUser {

    private _id: number;
    private _nombres: string;
    private _apellidos: string;
    private _telefono: string;
    private _distrito: string;
    private _direccion: string;
    private _descripcion: string;
    private _foto: string;
    private _oficio: string;


    constructor() { }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nombres(): string {
        return this._nombres;
    }
    public set nombres(value: string) {
        this._nombres = value;
    }

    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }

    public get telefono(): string {
        return this._telefono;
    }
    public set telefono(value: string) {
        this._telefono = value;
    }

    public get distrito(): string {
        return this._distrito;
    }
    public set distrito(value: string) {
        this._distrito = value;
    }

    public get direccion(): string {
        return this._direccion;
    }
    public set direccion(value: string) {
        this._direccion = value;
    }

    public get oficio(): string {
        return this._oficio;
    }
    public set oficio(value: string) {
        this._oficio = value;
    }

    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }

    public get foto(): string {
        return this._foto;
    }
    public set foto(value: string) {
        this._foto = value;
    }

}
