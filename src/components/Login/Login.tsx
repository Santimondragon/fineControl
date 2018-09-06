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
                <h1>Formulario de Ingreso</h1>
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
                <span>Contraseña</span>
                <input className="pass" type="password" placeholder="••••••••" onChange={() =>
                    store.handleChangePassword((document.querySelector('.pass') as HTMLInputElement).value)
                } />
                <button id="toRegister" onClick={() => {
                        formLoginProps.history.push("/");
                    }}
                >No tengo cuenta, deseo registrarme</button>
                <button type="submit">Ingresar</button>
            </form>

            {store.errorLogin && <div>
                <h4 style={{ color: "red" }}> Los Datos Ingresados no son correctos</h4>
            </div>}

        </article>
    )
}));

export default Login;