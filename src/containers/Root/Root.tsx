import * as React from 'react';
import { observer } from 'mobx-react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
    Redirect
} from 'react-router-dom'

import './Root.scss';
import Register from '../../components/Register/Register'
import Login from '../../components/Login/Login'
import Admin from '../../components/Admin/Admin'

import { store } from '../../stores/Store';

interface IRootProps { }

@observer export class Root extends React.Component<IRootProps> {

    render() {
        return (
            <Router>
                <section>
                    <Route exact path="/" component={Register} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/admin" component={Admin} />
                </section>
            </Router>
        )
    }
}


const PrivateRoute = ({ component: Component, ...rest }:any) => (
    <Route {...rest} render={(props) => (
        store.isAuth ?
        (<Component{...props} />) : (<Redirect to={{ pathname: "/login" }}/>
        )
    )} />
  )