import { fetchUnBus } from "../fetch/fetchUnBus";
import { useState, useEffect } from "react";
import "./Buses.css"

function MostrarUnBus(){

    const [endpoint, setEndpoint] = useState<string | null>(null);  

    const [valorId, setValorId] = useState("")

    const {bus, loading, error} = fetchUnBus(endpoint);

    useEffect(() => {
        if (bus) {
            alert(`Bus encontrado: 
                Número: ${bus.numeroBus} 
                Placa: ${bus.placa}, 
                Fecha de Creación: ${bus.fechaCreacion} 
                Características: ${bus.caracteristicas}, 
                Marca: ${bus.marca.nombre}
                Estado: ${bus.activo ? "Activo" : "No Activo"}`);
        }
    }, [bus]);

    const buscar = () =>{
        setEndpoint(`http://localhost:8080/bus/${valorId.trim()}`);
    }

    return(
        <>
            <h2>Mostrar un bus específico</h2>

            <input 
                type="text" 
                placeholder="Ingrese la ID del bus" 
                value={valorId}
                onChange={(e) => setValorId(e.target.value)}
            >
            </input>

            <br />

            <button onClick={buscar}>Buscar</button>

            <div className="container-fluid contenedor">
                <div className="row justify-content-center align-items-center">
                    {error && (
                        <div className="col-10">Error: {error}</div>
                        )}
                    {loading && (
                        <div className="col-10">Cargando...</div>
                        )}
                    {bus && (
                        <div className="col-10 col-lg-5 contenedor-bus p-0">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 text-start info1">
                                        <strong>Número de bus: </strong> {bus.numeroBus}
                                    </div>
                                    <div className="col-12 info2">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-12 text-start p-0"><strong>Placa: </strong> {bus.placa}</div>
                                                <div className="col-12 text-start p-0"><strong>Fecha de Creación: </strong> {bus.fechaCreacion}</div>
                                                <div className="col-12 text-start p-0"><strong>Características: </strong> {bus.caracteristicas}</div>
                                                <div className="col-12 text-start p-0"><strong>Marca: </strong> {bus.marca.nombre}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-start info3">
                                    <strong>Estado: </strong> {bus.activo ? "Activo" : "No Activo"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default MostrarUnBus