export class SolicitudModel {
    id? :string;
    ClientId?: string;
    UserId? : string;
    InmuebleId: string;
    TipoOferta? : string;
    TipoInmueble? :string;
    departmentName? :string;
    cityName?: string;
    Barrio?: string;
    Direccion?: string;
    Precio? : string;
    Fecha? :string;
    Estado?: String;
    Imagen? :{};
    Comentario? :string;
    Codeudor? :{};
    documento? : {};
    contrato?: {};
}