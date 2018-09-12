import React, { Component } from 'react';
import List from './component/List';
import Topic from './component/Topic';
import Writer from './component/Writer';
import Recommend from './component/Recommend';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';


class Home extends Component {
	render(){
		return (
              <HomeWrapper>
                 <HomeLeft>
                  <img className="banner-img" alt="test" src="//upload.jianshu.io/admin_banners/web_images/4419/31f60ec4cc01cfe02c5bc09bff208d58f2799c3e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                  <Topic></Topic>
                  <List></List>
                 </HomeLeft>
                 <HomeRight>
                   <Recommend></Recommend>
                   <Writer></Writer>
                 </HomeRight>
              </HomeWrapper>
			)
	}
}

export default Home;
