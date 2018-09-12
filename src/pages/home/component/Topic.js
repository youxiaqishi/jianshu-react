import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends Component {
	render(){
		const { list } = this.props;
		return (<TopicWrapper>
		{
			list.map((item)=>{
				return (
                     <TopicItem key={item.get('id')}>
                     	<img className="topic-pic" alt={item.get('title')} src={item.get('imgSrc')} />
                     	{item.get('title')}
                     </TopicItem>
					)
			})
		}
		</TopicWrapper>)
	}
}

const mapstate = (state) => ({
	list:state.get('home').get('topicList')
})

export default connect(mapstate, null)(Topic);
