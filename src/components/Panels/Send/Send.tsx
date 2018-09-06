import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../../stores/Store';
import { withRouter } from 'react-router';

import './Send.scss';

const Send = observer(() => {
    return (
        <article id="send">
            <button
                className={store.appliedDismissed <= 0 ? "done":"undone"}>
                SEND
            </button>
        </article>
    )
});

export default Send;