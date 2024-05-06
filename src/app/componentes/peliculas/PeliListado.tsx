import { useState } from "react";
import { Pelicula } from "../../modelos/Pelicula";
import { ARREGLO_PELICULAS } from "../../mocks/Pelicula-mocks";
import { ARREGLO_PELICULA_GENERO } from "../../utilidades/dominios/DomGenero";

export const PeliListado = () => {

  const [arrayPeliculas] = useState<Pelicula[]>(ARREGLO_PELICULAS);

  const obtNomGen = (valor: string) =>{
    for(const i of ARREGLO_PELICULA_GENERO){
      if (i.codigo == valor){
        return i.nombreGenero;
      }
    }
  }
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="col-md-11 mt-4">
            <table className="table table-striped table-hover">
              <thead>
                <tr className="table-danger">
                  <th style={{ width: "10%" }}>Nro</th>
                  <th style={{ width: "30%" }}>Nombre</th>
                  <th style={{ width: "20%" }}>Genero</th>
                  <th style={{ width: "30%" }}>Protagonista</th>
                  <th style={{ width: "10%" }}> </th>
                </tr>
              </thead>
              <tbody>
                {
                  arrayPeliculas.map((mipeli: Pelicula)=>(
                    <tr>
                      <td>{mipeli.codPelicula}</td>
                      <td>{mipeli.nombrePelicula}</td>
                      <td>{obtNomGen(mipeli.genPelicula)}</td>
                      <td>{mipeli.protaPelicula}</td>
                      <td>
                        <img src={mipeli.imgPeliculaBase64} alt="imagen" className="imagenListado"/>
                        {mipeli.imgPelicula}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };
  