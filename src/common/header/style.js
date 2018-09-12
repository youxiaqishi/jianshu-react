import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
// console.log(logoPic)

export const HeaderWrapper = styled.div`
  height:58px;
  border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
	href:'/'
})`
 position:absolute;
 top:0;
 left:0;
 display:block;
 width:100px;
 height:58px;
 background:url(${logoPic});
 background-size:contain;
`;

export const Nav = styled.div`
 width:960px;
 height:100%;
 box-sizing:border-box;
 margin:0 auto;
`;

export const NavItem = styled.div`
height:100%;
width:64px;
line-height:58px;
margin-right:10px;
 &.left{
 	float:left;
 }
 &.right{
 	float:right;
 }
 &.active{
 	color:#ea6f5a;
 }
`;


export const SearchWrapper = styled.div`
  position:relative;
  float:left;
  height:58px;
  .iconfont{
    position:absolute;
    right:5px;
    top:14px;
    width:30px;
    height:30px;
    line-height:30px;
    text-align:center;
    border-radius:50%;
    &.focused{
    background:#777;
    color:#fff;
  }
}
`;

export const Search = styled.input.attrs({
	placeholder:"搜索"
})`
position:relative;
top:9px;
padding: 0 30px 0 20px;
margin-left:15px;
width: 160px;
height: 38px;
font-size: 14px;
border: 1px solid #eee;
border-radius: 40px;
background: #eee;
&.slide-enter{
    transition:all .2s ease-out;
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit{
    transition:all .2s ease-out;
  }
  &.slide-exit-active{
    width:160px;
  }
&:focus{
	outline:none
}
&.focused{
  width:240px;
}
`;

export const Addtion  = styled.div`
  position:absolute
  top:0;
  right:0;
  height:58px;
`;

export const Button = styled.button`
    width: 80px;
    height: 38px;
    line-height: 24px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
    &:focus{
    	outline:none;
    }
    &.writing{
      width:100px;
      height:40px;
      background-color:#ea6f5a
      color:#fff;
      .iconfont{
        margin-right:3px;
      }
    }

`;

export const SearchInfo = styled.div`
   position:absolute;
   overflow:hidden;
   left:20px;
   top:58px;
   padding:10px;
   background-color: #fff;
   width:260px;
   box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.h3`
  margin-top:10px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`;

export const SearchInfoSwitch = styled.span`
  float:right;
  font-size:13px;
`;

export const SearchInfoItem = styled.a`
  display:block;
  float:left;
  line-height:20px;
  padding:0 5px;
  margin-right:10px;
  margin-bottom:15px;
  font-size:12px;
  border:1px solid #ddd;
  color:#787878;
  border-radius:3px;
`;