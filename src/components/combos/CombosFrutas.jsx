export const CombosFrutas = () => {

    const mostrarCombo = () => {
        
    }

  return (
    <div>
        <h2>Combos frutas</h2>
        <div>   
                <div className="card mb-3 d-flex align-items-center justify-content-center p-0 combo-container" >
                    <div className="row g-0 w-100 d-flex">
                        <div className="col-5 img-combo">
                            <img src="../public/img-verduras/ajo.webp" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-6 combo-descripcion">
                            <div className="card-body h-100 justify-content-between p-2">
                                <h5 className="text-start titulo-combo">Desayuno</h5>
                                <p className="precio-combo m-0">$6000</p>
                            </div>
                        </div>
                        <div className="col-1 d-flex justify-content-end ">
                            <button className="boton-combo"><i className="bi bi-arrow-bar-right"></i></button>
                    </div>
                </div>
                </div>
                <div className="card mb-3 d-flex align-items-center justify-content-center p-0 combo-container" >
                    <div className="row g-0 w-100 d-flex">
                        <div className="col-5 img-combo">
                            <img src="../public/img-verduras/ajo.webp" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-6 combo-descripcion">
                            <div className="card-body h-100 justify-content-between p-2">
                                <h5 className="text-start titulo-combo">Desayuno</h5>
                                <p className="precio-combo m-0">$6000</p>
                            </div>
                        </div>
                        <div className="col-1 d-flex justify-content-end ">
                            <button onClick={mostrarCombo} className="boton-combo"><i className="bi bi-arrow-bar-right"></i></button>
                    </div>
                    </div>
                </div>
        </div>
    </div>
  )
}