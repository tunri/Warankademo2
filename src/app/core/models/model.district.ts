export class District {

    private id: number;
    private nombre: string;

    constructor(id: number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    };

    setId(id: number): void {
        this.id = id;
    };

    getId(): number {
        return this.id;
    };

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

}
