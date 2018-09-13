import {Component} from 'react'
import API from '../lib/api'
import styled from 'styled-components'
import Post from '../components/Post'
import Layout from "../layouts/main"
import NextSeo from "next-seo"

const TopicContainer = styled.div`
	display: flex;
	align-items: flex-end;
	flex-wrap: wrap;
	margin-bottom: 30px;
`

const Topic = styled.div`
	    display: inline-block;
	    padding: 0 10px;
	    margin-right: 5px;
	    height: 25px;
	    font-size: 12px;
	    line-height: 25px;
	    border-radius: 25px;
	    background-color: ${props => props.activate ? '#7f8c8d' : '#f1f1f1'};
	    cursor: pointer;
`

class Index extends Component {
	state = {
		topic: {},
		activate: 'All'
	}
	_getConvertDate = (date) => API.convertDate(date)
	_onClickTopic = (topic) => {
		return () => this.setState({topic: topic, activate: topic.name})
	}

	static async getInitialProps() {
		const response = await API.requestGetRepos()
		const postList = await response.json()

		const topicList = postList.reduce((acc, val) => acc.concat(val.topics), [])
		const topicObj = topicList.reduce((acc, cur) => {
			acc[cur] = ++acc[cur] || 1;
			return acc;
		}, {})
		let topics = [{name: 'All', count: postList.length}]
		for (let key in topicObj) {
			topics.push({
				name: key,
				count: topicObj[key]
			})
		}
		return {postList, topics}
	}

	render() {
		const {postList, topics} = this.props
		const {topic, activate} = this.state
		return (
			<Layout title="Home">
				<NextSeo
					config={{
						title: 'Home'
					}}
				/>
				<TopicContainer>
					{topics.map(topic =>
						<Topic key={topic.name}
						       activate={topic.name === activate}
						       onClick={this._onClickTopic(topic)}>
							{topic.name + "(" + topic.count + ")"}
						</Topic>)}
				</TopicContainer>
				{postList.filter((post) => {
					if (topic.name === 'All' || topic.name === undefined) {
						return post
					} else {
						return post.topics.includes(topic.name)
					}
				}).slice(0).map(post =>
					<Post name={post.name}
					      description={post.description}
					      created_at={this._getConvertDate(post.created_at)}
					      topics={post.topics}
					      key={post.name}
					/>)
				}
			</Layout>
		)
	}
}


// const Index = ({postList, topics}) => {
// 	return (
// 		<Layout title="Home">
// 			<NextSeo
// 				config={{
// 					title: 'Home'
// 				}}
// 			/>
// 			<TopicContainer>
// 				{topics.map(topic =>
// 					<Topic key={topic.name}
// 					       onClick={_onClickTopic(topic)}>
// 						{topic.name + "(" + topic.count + ")"}
// 					</Topic>)}
// 			</TopicContainer>
// 			{postList.map(post =>
// 				<Post name={post.name}
// 				      description={post.description}
// 				      created_at={_getConvertDate(post.created_at)}
// 				      topics={post.topics}
// 				      key={post.name}
// 				/>)}
// 			{postList.filter((post) => {
// 				return post.topics.includes('')
// 			}).slice(0).map(post =>
// 				<Post name={post.name}
// 				      description={post.description}
// 				      created_at={_getConvertDate(post.created_at)}
// 				      topics={post.topics}
// 				      key={post.name}
// 				/>)
// 			}
// 		</Layout>
// 	)
// }
//
// Index.getInitialProps = async () => {
// 	const response = await API.requestGetRepos()
// 	const postList = await response.json()
//
// 	const topicList = postList.reduce((acc, val) => acc.concat(val.topics), [])
// 	const topicObj = topicList.reduce((acc, cur) => {
// 		acc[cur] = ++acc[cur] || 1;
// 		return acc;
// 	}, {})
// 	let topics = []
// 	for (let key in topicObj) {
// 		topics.push({
// 			name: key,
// 			count: topicObj[key]
// 		})
// 	}
// 	return {postList, topics}
// }
//
// Index.propTypes = {
// 	postList: PropTypes.array.isRequired
// }

export default Index
