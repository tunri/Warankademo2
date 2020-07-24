/**
 * Model Recommended (oficio)
 */
// import {Job} from './model.job';
// import {District} from '@app/core/models/district.model';


export class Recommended {

    private id: number;
    private nombres: string;
    private apellidos: string;
    private telefono: string;
    private descripcion: string;
    private foto: string;
    private oficio: string;

    /**
     * @param id
     * @param nombres
     * @param apellidos
     * @param telefono
     * @param descripcion
     * @param foto
     * @param oficio
     */
    constructor(id: number, nombres: string, apellidos: string, telefono: string, descripcion: string, foto: string, oficio: string) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.descripcion = descripcion;
        this.foto = foto;
        this.oficio = oficio;
    }


    setId(id: number): void {
        this.id = id;
    }

    getId(): number {
        return this.id;
    }

    setNombres(nombres: string): void {
        this.nombres = nombres;
    }

    getNombres(): string {
        return this.nombres;
    }

    setApellidos(apellidos: string): void {
        this.apellidos = apellidos;
    }

    getApellidos(): string {
        return this.apellidos;
    }

    setTelefono(telefono: string): void {
        this.telefono = telefono;
    }

    getTelefono(): string {
        return this.telefono;
    }

    setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    getDescripcion(): string {
        return this.descripcion;
    }

    setFoto(foto: string): void {
        this.foto = foto;
    }

    getFoto(): string {
        return this.foto;
    }

    setOficio(oficio: string): void {
        this.oficio = oficio;
    }

    getOficio(): string {
        return this.oficio;
    }

}
