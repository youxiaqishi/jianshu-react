import React, { Component } from 'react';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	Search,
	Addtion,
	Button
} from './style';

class Header extends Component{
	render(){
		return (
           <HeaderWrapper>
           	<Logo />
           	<Nav>
           	    <NavItem className="left">首页</NavItem>
           	    <NavItem className="left">下载APP</NavItem>
           	    <Search></Search>
           	    <NavItem className="right">
                  <i className="iconfont">&#xe636;</i>
           	    </NavItem>
           	    <NavItem className="right">登录</NavItem>
           	</Nav>
           	<Addtion>
           	    <Button>注册</Button>	
           	    <Button>写文章</Button>	
           	</Addtion>
           </HeaderWrapper>
			)
	}
}

export default Header;