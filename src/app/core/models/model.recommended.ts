/**
 * Model Recommended (oficio)
 */
import {Job} from './model.job';
import {District} from '@app/core/models/district.model';


export class Recommended {
    nombres: string;
    apellidos: string;
    direccion: string;
    telefono: string;
    descripcion: string;
    foto: string;
    facebook: string;
    twitter: string;
    oficio_id?: number;
    categoria_id?: number;
    distrito_id?: number;
    usuario_perfil_id?: number;
    oficio?: Job;
    distrito?: District;
}
