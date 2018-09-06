import * as React from 'react';
import { observer } from 'mobx-react';


import './Document.scss';
import { store } from '../../../stores/Store';

const Documento = observer(() => {
    return (
        <article id="doc">
            <div className="informe">
                <h1>Jueves, Septiembre 6 de 2018</h1>
                <h2>Informe de multas del periodo Agosto 2018</h2>
                <p>Listado de casas y motivos de las multas aplicadas </p>
                <p><b>Multas:</b><br /><br />
                    {store.fineList.map((elem: string, index: number) =>
                        <span key={elem}> {elem} <br /></span>
                    )}
                </p>
                <p>Unidad Residencial Icesi</p>
                <h3>_________________________<br />Santiago Mondragón <br/>cc: 1143866880</h3>
            </div>
            <div className="botones">
                <button onClick={() =>{
                    alert("Printing...")
                }}
                className="imprimir">Print</button>
            </div>
        </article>
    )
}
)

export default Documento;