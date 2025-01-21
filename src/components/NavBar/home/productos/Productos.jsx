export const Productos = () => {
  return (
    <div className="container mt-2">
        <div>
            <h4>Productos</h4>
        </div>
        <div id="productos-lista">
            <div className="card">
                <img src="../public/img-verduras/1.webp" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h6 className="card-title">Card title</h6>
                    <p className="oferta">2kg -10%</p>
                    <div className="precio-button">
                        <p className="precio">$1500</p>
                        <button href="#" className="btn button-add"><i className="bi bi-plus-lg"></i></button>
                    </div>
                </div>
            </div>
            <div className="card">
                <img src="../public/img-verduras/2.webp" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h6 className="card-title">Card title</h6>
                    <p className="oferta">2kg -10%</p>
                    <div className="precio-button">
                        <p className="precio">$1500</p>
                        <button href="#" className="btn button-add"><i className="bi bi-plus-lg"></i></button>
                    </div>
                </div>
            </div>
            <div className="card">
                <img src="../public/img-verduras/5.webp" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h6 className="card-title">Card title</h6>
                    <p className="oferta">2kg -10%</p>
                    <div className="precio-button">
                        <p className="precio">$1500</p>
                        <button href="#" className="btn button-add"><i className="bi bi-plus-lg"></i></button>
                    </div>
                </div>
            </div>
            <div className="card">
                <img src="../public/img-verduras/4.jpeg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h6 className="card-title">Card title</h6>
                    <p className="oferta">2kg -10%</p>
                    <div className="precio-button">
                        <p className="precio">$1500</p>
                        <button href="#" className="btn button-add"><i className="bi bi-plus-lg"></i></button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
