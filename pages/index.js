import React from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import moment from 'moment'
import Post from '../components/Post'
import Layout from "../layouts/main";

const Container = styled.section`
	padding: 50px;
	height: auto;
	min-height: 500px;
	display: flex;
	align-items: center;
	flex-direction: column;
`

const _getConvertDate = (date) => {
	return moment(new Date(date)).format("YYYY-MM-DD a hh:mm") + ' created'
}

const Index = ({postList}) => (
	<main>
		<Layout title="GM Ground">
			<Container>
				{postList.map(post =>
					<Post name={post.name}
					      description={post.description}
					      created_at={_getConvertDate(post.created_at)}
					      key={post.name}
					/>)}
			</Container>
		</Layout>
	</main>
)

Index.getInitialProps = async () => {
	const response = await fetch('https://api.github.com/users/gmground/repos')
	const postList = await response.json()

	return {postList}
}

Index.propTypes = {
	postList: PropTypes.array.isRequired
}

export default Index
