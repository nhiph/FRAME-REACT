import React from 'react'
import { Route } from "react-router";
import Header from '../../components/header/Header';

//props = {component:Home,path:'/home'}
export default function HomeTemplate(props) {
    return (
        <Route path={props.path} exact render={(propsRoute) => {
            return (
              <div>
                <Header />
                <props.component {...propsRoute} />
              </div>
            );
          }}
        />
    )
}
