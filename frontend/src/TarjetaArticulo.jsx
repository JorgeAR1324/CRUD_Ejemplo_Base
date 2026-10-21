// Responsabilidad: Mostrar un articulo. Esto no pedia ni los datos ni tampoco los modicia, solamente los pinta.
import { URL_BACKEND } from "./apiArticulos.js"

const enPesos = numero => Number(numero).toLocaleString("es-CO", {style: "currency", currency: "COP", maximumFractionDigits: 0})

export default function TarjetaArticulo({articulo, alEditar, alEliminar}){
    const {nombre, descripcion, precio_compra, precio_venta, stock_minimo, stock_maximo, imagen} = articulo
    const margen = precio_venta - precio_compra

    return(
        <article className="card">
            {imagen ? <img src={URL_BACKEND + imagen} alt={nombre} /> : <div className="card__sin-imagen">Sin imagen</div>}
            
            <div className="card__cuerpo">
                <h3>{nombre}</h3>
                <p className="card__descripcion">{descripcion}</p>

                <dl className="card__datos">
                    <div><dt>Compra</dt><dd>{enPesos(precio_compra)}</dd></div>
                    <div><dt>Venta</dt><dd>{enPesos(precio_venta)}</dd></div>
                    <div><dt>Stock mín.</dt><dd>{enPesos(stock_minimo)}</dd></div>
                    <div><dt>Stock max.</dt><dd>{enPesos(stock_maximo)}</dd></div>
                </dl>

                <span className={`card__margen ${margen < 0 ? "card__margen--negativo" : ""}`}>Margen: {enPesos(margen)}</span>

                <div className="card__botones">
                    <button onClick={()=> alEditar(articulo)}>Editar</button>
                    <button className="peligro" onClick={()=> alEliminar(articulo)}>Eliminar</button>
                </div>
            </div>
        </article>

    )
}