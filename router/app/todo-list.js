'use strict'
import React from 'react';
class Component extends React.Component{
	constructor(props){
		super(props);
		this.state={
			todolist:[]
		};
		this.update=this.update.bind(this);
	}
	update(rows){
		this.setState({
			todolist:rows
		});
	}
	render(){
		return (
		 <div>
		 	<Enterbox todolist={this.state.todolist} submit={this.update}/>
		 	<View todolist={this.state.todolist} del={this.update}/>
		 </div>
		);
	}
}
class Enterbox extends React.Component{
	onsubmit(){
		let rows=this.props.todolist;
		let item=this.refs.enterlist.value;
		rows.push(item);
		this.refs.enterlist.value="";
        this.props.submit(rows);
	}
	render(){
		return(
		<div>
		 <input type="text" ref="enterlist" placeholder="enter your todo-list"/>
		 <input type="button" value="Add" onClick={this.onsubmit.bind(this)}/>
		</div>
		);
	}
}
class View extends React.Component{
	ondel(i){
		let rows=this.props.todolist;
		rows.splice(i,1);
		this.props.del(rows);
	}
	render(){
		return (
		 <ul>
		  {
		   this.props.todolist.map((item,i)=>{
			  return (
			  <li id={i}>
			   <span>{item}</span>
			   <input type="button" value="delete" onClick={this.ondel.bind(this,i)}/>
			  </li>
			  );
           })
          }
		 </ul>
		);
	}
}
export default Component;