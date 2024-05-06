export class Pelicula{
    public codPelicula: number;
    public nombrePelicula: string;
    public protaPelicula: string;
    public genPelicula: string;
    public imgPelicula: string;
    public imgPeliculaBase64: string;

    constructor(cod: number, nom: string, pro: string, gen: string, img: string, base: string){
        this.codPelicula = cod;
        this.nombrePelicula = nom;
        this.protaPelicula = pro;
        this.genPelicula = gen;
        this.imgPelicula = img;
        this.imgPeliculaBase64 = base;
    }
}