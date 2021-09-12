import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

//按钮组件
class Btn extends React.Component{
  state = {}
  componentDidMount(){
    console.log("type类型可输入值为default,main,success,danger,warning,info,text\nsize大小可输入值为big,default,small\nshape形状可输入值为default,round,capsule\nusable可用性可输入值为true,false")
    var btn = document.getElementById("btn")
    //按钮类型
    switch(this.props.type){
      default:
        btn.className = "type-default";
        btn.innerText = "default";
        break;
      case "main":
        btn.className = "type-main";
        btn.innerText = "main";
        break;
      case "success":
        btn.className = "type-success";
        btn.innerText = "success";
        break;
      case "danger":
        btn.className = "type-danger";
        btn.innerText = "danger";
        break;
      case "warning":
        btn.className = "type-warning";
        btn.innerText = "warning";
        break;
      case "info":
        btn.className = "type-info";
        btn.innerText = "info";
        break;
      case "text":
        btn.className = "type-text";
        btn.innerText = "text";
        break;
      }
    //按钮大小
      switch(this.props.size){
        default:
          btn.className += " size-default";
          break;
        case "small":
          btn.className += " size-small";
          break;
        case "big":
          btn.className += " size-big";
          break;
      }
    //按钮形状
      switch(this.props.shape){
        default:
          btn.className += " shape-default";
          break;
        case "capsule":
          btn.className += " shape-capsule";
          break;
        case "round":
          btn.className += " shape-round";
          break;
      }
    //按钮可用性
      switch(this.props.usable){
        default:
          btn.removeAttribute("disabled");
          break;
        case "false":
          btn.setAttribute("disabled",true);
          break;
      }
  }
  //被点击时弹窗
  handleClick = () => {
    alert("Be clicked")
  }

  render(){
    return(
      <button id="btn" onClick={this.handleClick}></button>
    )
  }
}

Btn.propTypes = {
  type : PropTypes.string,
  size : PropTypes.string,
  shape : PropTypes.string,
  usable : PropTypes.string,
}

//复用按钮组件选择样式
class Myapp extends React.Component{
  state={}
  render(){
    return(
      <Btn type="success" size="small" shape="round" usable="true"/>
    )
  }
}

ReactDOM.render(<Myapp/>,document.getElementById("root"))