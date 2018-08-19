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

export const Search = styled.input.attrs({
	placeholder:"搜索"
})`
position:relative;
top:9px;
padding: 0 40px 0 20px;
margin-left:15px;
width: 160px;
height: 38px;
font-size: 14px;
border: 1px solid #eee;
border-radius: 40px;
background: #eee;
&:focus{
	outline:none
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
`
