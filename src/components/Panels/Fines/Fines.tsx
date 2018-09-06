import * as React from 'react';
import { observer } from 'mobx-react';

import './Fines.scss';
import { store } from '../../../stores/Store';

const Fines = observer(() => {
    return (
        <article id="fines">
            <ul className="lista">
                {store.fines.map((elem: any, index: number) =>
                    <li key={elem}
                        onClick={() => {
                            store.onChangeFineSelected(elem)
                        }}
                        className={store.fineSelected === elem ? 'fineSelected' : ''}
                        style={{
                            display: store.fineSelected[3] === "Applied" || "Dismissed" ? "flex": "none"
                        }}
                    >
                        <h1>{elem.house}</h1>
                        <p>{elem.reason}</p>
                        <h2>{elem.date}</h2>
                    </li>
                )}
            </ul>
            <div className="botones">
                <button className="no-multar" onClick={() => {
                    if(document.querySelector(".fineSelected") as HTMLElement === null){
                        alert("Selecciona una multa")
                    } else{ 
                        (document.querySelector(".fineSelected") as HTMLElement).style.display = "none";
                        (document.querySelector(".fineSelected") as HTMLElement).className = "dismissed"
                        const num = store.appliedDismissed - 1;
                        store.onFineModified(num);
                        const house = JSON.stringify(store.fineSelected);
                        store.viewDebtUpdate(JSON.parse(house).house);
                    }  
                }}
                >
                Dismiss</button>
                <button className="multar"
                onClick={() => {
                    if(document.querySelector(".fineSelected") as HTMLElement === null){
                        alert("Fine Dismissed")
                    } else{ 
                        (document.querySelector(".fineSelected") as HTMLElement).style.display = "none";
                        (document.querySelector(".fineSelected") as HTMLElement).className = "applied"
                        const num = store.appliedDismissed - 1;
                        store.onFineModified(num);
                        const fineArray = JSON.stringify(store.fineSelected);
                        const finalFineArray = JSON.parse(fineArray);
                        const house = finalFineArray.house;
                        const reason = finalFineArray.reason;
                        store.onFineListModified(house + " - "+ reason);
                    }            
                }}
                
                >
                Fine</button>
            </div>
        </article>
    )
}
)

export default Fines;