'use strict'
import React from 'react';
import {Link} from 'react-router';
require('./app.css');
class Apps extends React.Component{
      render(){
        return (<div><h1>宿刚的前端练习</h1>
            <ul role="nav">
                <li><Link to="/todo-list" >todo-list</Link></li>
                <li><Link to="/push-box" >推箱子</Link></li>
            </ul>
            {this.props.children}
        </div>);
    }
}
export default Apps;