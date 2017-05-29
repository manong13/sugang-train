'use strict'
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import Apps from './apps'
import Pushbox from './push-app';
import Todo from './todo-list';
//let routes = ();
ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={Apps}>
            <Route path="/todo-list" component={Todo}/>
            <Route path="/push-box" component={Pushbox}/>
        </Route>
    </Router>,
    document.getElementById('demo')
);
/*    <Router history={hashHistory}>
        <Route path="/" component={Apps}>
            <Route path="/todo-list" component={Todo}/>
            <Route path="/push-box" component={Pushbox}/>
        </Route>
    </Router>,
    document.getElementById('demo')
);
*/