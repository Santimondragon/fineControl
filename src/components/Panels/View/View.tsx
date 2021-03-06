import * as React from 'react';
import { observer } from 'mobx-react';

import './View.scss';
import { store } from '../../../stores/Store';

const View = observer(() => {
    return (
        <article id="view">
            <ul>
                {store.houses.map((elem: any, index: number) =>
                    <li key={elem}
                        onClick={() => {
                            store.onChangeHouseSelected(elem)
                            console.log(store.houseSelected)}
                        }
                    >
                        <div
                            className={store.houseSelected === elem ? 'selected '+elem[1] : ''+elem[1]}
                            onDoubleClick={() => {
                                alert(elem[0]+" "+elem[1]);
                            }}
                        ><span>{elem[0]}</span>
                        </div>
                    </li>
                )}
            </ul>
        </article>
    )
}
)

export default View;