import * as React from 'react';
import './Register.scss';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';

interface formRegisterProps {

}
const Register = observer(withRouter((formRegisterProps) => {
    return (

        <article>
            <h1>Formulario de Registro</h1>
            <form onSubmit={() => {
                store.register() &&
                event.preventDefault()
                formRegisterProps.history.push("/login");
            }
            }>
                <span>E-Mail</span>
                <input className="mail" type="email" placeholder="example@gmail.com" onChange={(e) =>
                    store.handleChangeEmail((document.querySelector('.mail') as HTMLInputElement).value)
                } />
                <span>Contraseña</span>
                <input className="pass" type="password" placeholder="••••••••" onChange={() =>
                    store.handleChangePassword((document.querySelector('.pass') as HTMLInputElement).value)
                } />
                <span>Confirmar Contraseña</span>
                <input id="pass" type="password" placeholder="••••••••" />

                <button id="toLogin" onClick={() => {
                    formRegisterProps.history.push("/login");
                }}
                >Ya estoy registrado</button>

                <button type="submit">Registrarse</button>

            </form>
        </article>
    )
}));

export default Register;