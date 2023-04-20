import Tema from "./Tema";

export default interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema?: Tema|null
}