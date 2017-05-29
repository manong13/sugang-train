'use strict'
import React from 'react';
import {Link} from 'react-router';
require('./app.css');
class Apps extends React.Component{
      render(){
        return (<div><h1>宿刚的前端练习</h1>
            <ul role="nav">
                <li><link to="/todo-list" activeClassName="active">todo-list</link></li>
                <li><link to="/push-app" activeClassName="active">推箱子</link></li>
            </ul>
            <div id = 'view'>
            {this.props.children}
            </div>
        </div>);
    }
}
export default Apps;