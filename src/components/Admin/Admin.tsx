import * as React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

import './Admin.scss';

import Send from '../../components/Panels/Send/Send'
import Document from '../../components/Panels/Document/Document'
import View from '../../components/Panels/View/View'
import Fines from '../../components/Panels/Fines/Fines'

import { store } from '../../stores/Store';

interface IAdminProps{}

@observer class Admin extends React.Component<IAdminProps> {
    
    render(){
        return <article className="admin">
                <header>
                    
                </header>
                <section className="content">
                    <article className="sideBar">
                    
                    </article>
                    <article className="dashboard">
                        <Send/>
                        <Fines/>
                        <Document/>
                        <View/>
                    </article>
                </section>
            </article>
    }
}
export default Admin;