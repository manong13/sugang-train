'use strict'
import React from 'react';
import {mapdata} from './map';
require('./app.css');
class  Pushbox extends React.Component{
    constructor(props){
		super(props);
		this.state={
			map:mapdata[0]
		};
	}
    Personmove(){
        let posi = 0;
        let position = 0;
        let map = this.state.map;
        let pass = 0;
        let lap = 0;
        let keyCode = 0;
        let a,b,c;
        let cacu0 = function(m,u,n){
            switch(u){
                    case 0:
                        b=a;
                        a=0;
                        break;
                    case 2:
                        b=a;
                        a=0;
                        lap=1;
                        break;
                    case 3:
                        switch(n){
                            case 0:
                                c=b;
                                b=a;
                                a=0;
                                break;
                            case 2:
                                c=32;
                                b=a;
                                a=0;
                                break;
                        }
                        break;
                    case 32:
                        switch(n){
                            case 0:
                                c = 3;
                                b = a;
                                a = 0;
                                lap=1;
                                break;
                            case 2:
                                c = 32;
                                b = a;
                                a = 0;
                                lap=1;
                                break;
                        }
                        break;
                    
                }
        }
        let cacu1 = function(m,u,n){
            switch(u){
                    case 0:
                        b=a;
                        a=2;
                        lap=0;
                        break;
                    case 2:
                        b=a;
                        a=2;
                        break;
                    case 3:
                        switch(n){
                            case 0:
                                c=b;
                                b=a;
                                a=2;
                                lap=0;
                                break;
                            case 2:
                                c=32;
                                b=a;
                                a=2;
                                lap=0;
                                break;
                        }
                        break;
                    case 32:
                        switch(n){
                            case 0:
                                c = 3;
                                b = a;
                                a = 2;
                                break;
                            case 2:
                                c = 32;
                                b = a;
                                a = 2;
                                break;
                        }
                        break;
                    
                }
        }
       // cacu0=cacu0.bind(this);
        //cacu1=cacu1.bind(this);
        document.onkeydown = (ev)=>{
                ev = ev || window.event;
                keyCode = ev.keyCode;
                posi = this.state.map.map((item,i,array)=>{if(item>=4 && item<=7){return 1;} else{return 0;}});
                position = posi.indexOf(1);
                switch(keyCode){
                    //左
                    case 37:
                    a = 7;
                    b = map[position-1];
                    c = map[position-2];
                    if(lap){
                        cacu1(a,b,c);
                    } else { cacu0(a,b,c);}
                    map[position] = a;
                    map[position-1] = b;
                    map[position-2] = c;
                    this.setState({map:map});
                    if(map.every((item,i,array)=>{return item!=2;}) && map.every((item,i,array)=>{return item!=3;})){
                        pass=pass+1;
                        alert('恭喜过关');
                        this.setState({map:mapdata[pass]});
                        map = this.state.map;
                    };
                    break;
                    //上
                    case 38:
                    a = 4;
                    b = map[position-16];
                    c = map[position-32];
                    if(lap){
                        cacu1(a,b,c);
                    } else { cacu0(a,b,c);}
                    map[position] = a;
                    map[position-16] = b;
                    map[position-32] = c;
                    this.setState({map:map});
                    if(map.every((item,i,array)=>{return item!=2;}) && map.every((item,i,array)=>{return item!=3;})){
                        pass=pass+1;
                        alert('恭喜过关');
                        this.setState({map:mapdata[pass]});
                        map = this.state.map;
                    }
                    break;
                    //右
                    case 39:
                    a = 5;
                    b = map[position+1];
                    c = map[position+2];
                    if(lap){
                        cacu1(a,b,c);
                    } else { cacu0(a,b,c);}
                    map[position] = a;
                    map[position+1] = b;
                    map[position+2] = c;
                    this.setState({map:map});
                    if(map.every((item,i,array)=>{return item!=2;}) && map.every((item,i,array)=>{return item!=3;})){
                        pass=pass+1;
                        alert('恭喜过关');
                        this.setState({map:mapdata[pass]});
                        map = this.state.map;
                    }
                    break;
                    //下
                    case 40:
                    a = 6;
                    b = map[position+16];
                    c = map[position+32];
                    if(lap){
                        cacu1(a,b,c);
                    } else { cacu0(a,b,c);}
                    map[position] = a;
                    map[position+16] = b;
                    map[position+32] = c;
                    this.setState({map:map});
                    if(map.every((item,i,array)=>{return item!=2;}) && map.every((item,i,array)=>{return item!=3;})){
                        pass=pass+1;
                        alert('恭喜过关');
                        this.setState({map:mapdata[pass]});
                        map = this.state.map;
                    }
                    break;
                }
                return false;
        }
    }
    componentDidMount(){
        this.Personmove();   
    }
    render(){
        let onmap = this.state.map;
        return (
            <div id = 'app'>
                {
                    onmap.map((item,i)=>{
                        let x =i%16;
                        let y =parseInt(i/16);
                        let div = null;
                        switch(item){
                            case 0:
                            div = (<img style ={{left:x*35+'px',top:y*35+'px'}} src = {require('../img/back.png')} />);
                            break;
                            case 1:
                            div = (<img style ={{left:x*35+'px',top:y*35+'px'}} src = {require('../img/wall.png')}/>);
                            break;
                            case 2:
                            div = (<img style ={{left:x*35+'px',top:y*35+'px'}} src ={require('../img/ball.png')}/>);
                            break;
                            case 3:
                            div = (<img style ={{left:x*35+'px',top:y*35+'px'}} src = {require('../img/box.png')}/>);
                            break;
                            case 4:
                            div = (<img style ={{left:x*35+'px',top:y*35+'px'}} src = {require('../img/up.png')}/>);
                            break;
                            case 5:
                            div = (<img style ={{left:x*35+'px',top:y*35+'px'}} src = {require('../img/right.png')}/>);
                            break;
                            case 6:
                            div = (<img style ={{left:x*35+'px',top:y*35+'px'}} src = {require('../img/down.png')}/>);
                            break;
                            case 7:
                            div = (<img style ={{left:x*35+'px',top:y*35+'px'}} src = {require('../img/left.png')}/>);
                            break;
                            case 32:
                            div = (<img style ={{left:x*35+'px',top:y*35+'px'}} src ={require('../img/box.png')}/>);
                            break;
                        }
                        return div;
                    })
                }
            </div>)
    }
}
export default Pushbox;