import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';

import './Login.scss';

interface formLoginProps {

}

const Login = observer(withRouter((formLoginProps) => {
    return (
        <article>
            <div>
                <h1>Log In Form</h1>
            </div>
            <form onSubmit={(event) => {
                store.login();
                event.preventDefault();
                formLoginProps.history.push("/admin")
            }
            }>
                <span>E-Mail</span>
                <input className="mail" type="email" placeholder="example@gmail.com" onChange={() =>
                    store.handleChangeEmail((document.querySelector('.mail') as HTMLInputElement).value)
                } />
                <span>Password</span>
                <input className="pass" type="password" placeholder="••••••••" onChange={() =>
                    store.handleChangePassword((document.querySelector('.pass') as HTMLInputElement).value)
                } />
                <button id="toRegister" onClick={() => {
                        formLoginProps.history.push("/");
                    }}
                >I do not have an account, I wish to register</button>
                <button type="submit">Log In</button>
            </form>

            {store.errorLogin && <div>
                <h4 style={{ color: "red" }}> Los Datos Ingresados no son correctos</h4>
            </div>}

        </article>
    )
}));

export default Login;