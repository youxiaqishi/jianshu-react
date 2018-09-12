import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators }  from './store';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	Search,
	Addtion,
	Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from './style';

class Header extends Component {
  getListArea(show){
    const { page, totalPage, focused, list, mouseIn, mouseEnter, mouseLeave, handleChangePage} = this.props;
    let oldList = list.toJS();
    let newList = [];
    if(oldList.length){
      for(let i = (page-1)*10; i < page*10; i++){
        newList.push(<SearchInfoItem key={oldList[i]}>{oldList[i]}</SearchInfoItem>)
      }
    }
    
    if(focused || mouseIn){
    return (
        <SearchInfo
          onMouseEnter = {mouseEnter}
          onMouseLeave = {mouseLeave}
        >
          <SearchInfoTitle>热门搜索
             <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage)}>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          {
            newList
          }
        </SearchInfo>
      )
    }else{
      return null;
    }
  }
  render(){
    const { focused, list, handleInputFocus, handleInputBlur} = this.props;
    return (
     <HeaderWrapper>
      <Logo />
      <Nav>
          <NavItem className="left">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <SearchWrapper>
           <CSSTransition
             in={focused}
             timeout={200}
             classNames="slide"
           >
            <Search 
               className = {focused ? 'focused':''}
               onFocus={()=>handleInputFocus(list)}
               onBlur = {handleInputBlur}
            ></Search>
            </CSSTransition>
            <i className= {focused ? 'focused iconfont':"iconfont"}>&#xe63d;</i>
            {this.getListArea()}
          </SearchWrapper>
          
          <NavItem className="right">
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <NavItem className="right">登录</NavItem>
      </Nav>
      <Addtion>
          <Button>注册</Button> 
          <Button className="writing">
            <i className="iconfont">&#xe608;</i>
          写文章</Button>  
      </Addtion>
     </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      focused:state.getIn(['header','focused']),
      list:state.getIn(['header','list']),
      page:state.getIn(['header','page']),
      mouseIn:state.getIn(['header','mouseIn']),
      totalPage:state.getIn(['header','totalPage'])
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
      handleInputFocus(list){
        (list.size === 0) && dispatch(actionCreators.getList());
        dispatch(actionCreators.searchFocus());
      },
      handleInputBlur(){
        dispatch(actionCreators.searchBlur());
      },
      mouseEnter(){
        dispatch(actionCreators.mouseEnter());
      },
      mouseLeave(){
        dispatch(actionCreators.mouseLeave());
      },
      handleChangePage(page, totalPage){
        console.log(page, totalPage);
        if(page<totalPage){
          dispatch(actionCreators.handleChangePage(page+1));
        }else{
          dispatch(actionCreators.handleChangePage(1));
        }
        
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);