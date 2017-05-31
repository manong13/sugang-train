'use strict'
import React from 'react';
import {Link} from 'react-router';
import'./app.css';
import {Menu} from 'antd';
class Apps extends React.Component{
      render(){
        return (<div><h1>宿刚的前端练习</h1>
            <Menu role="nav">
                <Menu.Item><Link to="/todo-list" >todo-list</Link></Menu.Item>
                <Menu.Item><Link to="/push-box" >推箱子</Link></Menu.Item>
            </Menu>
            {this.props.children}
        </div>);
    }
}
export default Apps;