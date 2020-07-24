/**
 * Model Job (oficio)
 */
export class Job {
    // oficio_id?: number;
    // categoria_id?: number;
    private id: number;
    private nombre: string;
    // descripcion?: string;
    // categorium?: object;

    constructor(id: number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    }

    setId(id: number): void {
        this.id = id;
    }

    getId(): number {
        return this.id;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getNombre(): string {
        return this.nombre;
    }

}
