import { fetchBuses } from "../fetch/fetchBuses"
import "./Buses.css"

function MostrarBuses(){

    const {buses, loading, error} = fetchBuses("http://localhost:8080/bus");

    return(
        <>
            <h2>Mostrar todos los buses</h2>
            <div className="container-fluid contenedor-tabla">
                <div className="row justify-content-evenly align-items-center">
                    <div className="col-10 tabla-encabezados p-0">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-1 text-center titulo-impar">N°</div>
                                <div className="col-2 text-center titulo-par">Placa</div>
                                <div className="col-2 text-center titulo-impar">Fecha de Creación</div>
                                <div className="col-4 text-center titulo-par">Características</div>
                                <div className="col-2 text-center titulo-impar">Marca</div>
                                <div className="col-1 text-center titulo-par">Estado</div>
                            </div>
                        </div>
                    </div>
                    {error && (
                        <div className="col-10">Error: {error}</div>
                        )}
                    {loading && (
                        <div className="col-10">Cargando...</div>
                        )}
                    {buses?.map((bus) => (
                        <div className="col-10 p-0 tabla-contenidos">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-1 text-center elemento-impar">{bus.numeroBus}</div>
                                    <div className="col-2 text-center elemento-par">{bus.placa}</div>
                                    <div className="col-2 text-center elemento-impar">{bus.fechaCreacion}</div>
                                    <div className="col-4 text-center elemento-par">{bus.caracteristicas}</div>
                                    <div className="col-2 text-center elemento-impar">{bus.marca.nombre}</div>
                                    <div className="col-1 text-center elemento-par">{bus.activo ? "Activo" : "No Activo"}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MostrarBuses