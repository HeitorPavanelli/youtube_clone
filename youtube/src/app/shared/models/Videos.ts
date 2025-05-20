import { Usuario } from "./Usuario";

export interface  Videos {
    id?: number;
    titulo?: string;
    usuario_id?: number
    visualizacoes?: number;
    dataPostada?: string;
    usuario?: Usuario;
    link?: string;
    descricao?: string;
}