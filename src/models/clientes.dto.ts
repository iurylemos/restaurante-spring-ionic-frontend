export interface ClienteDTO {
    id : string;
    nome : string;
    email: string;

    //Campo url da imagem, para dizer que o atributo é opcional
    //Basta colocar o ? depois do nome do atributo
    imageUrl? : string;
}