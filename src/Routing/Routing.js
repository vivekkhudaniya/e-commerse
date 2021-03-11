import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import Main from '../Pages/Main'
import Enquery from '../Pages/Enquery'
import WhoWeAre from '../Pages/WhoWeAre'
import Index from '../Pages/Index'
//import Product from '../Pages/ProductRange'
import Contact from'../Pages/Contact'


export default class Routing extends React.Component{
    render(){
        return(
            <Router>
            <Switch>
                <Route exact path ='/' component={Main}/>
                <Route path = '/enquery' component={Enquery}/>
                <Route path = '/Who' component={WhoWeAre}/>
                <Route path = '/Index' component={Index}/>
                {/* <Route path = '/Product' component={Product}/> */}
                <Route path = '/Contact' component={Contact}/>
                 
               
                
            </Switch>
        </Router>
        )
    }
}