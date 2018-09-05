import React from 'react'
import Disqus from 'disqus-react';
import Link from 'next/link'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import ReactMarkDown from 'react-markdown'
import {base64} from 'js-base64'
import Layout from "../layouts/main";

const Container = styled.div`
	padding: 10px 10px 10px 10px;
	display: inline-block;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 800px;
	 @media screen and (min-width: 320px) and (max-width: 667px){
     width: 100px;
 	}
 	@media screen and (min-width: 320px) and (max-width: 667px) and (orientation: portrait) {
    width: 90%;
	}
`

const DisqusContainer = styled.div`
	margin-top: 30px;
`


const Post = ({title, decoded, disqusShortname, disqusConfig}) => (
	<main>
		<Layout title={title}>
			<Container>
				<ReactMarkDown source={decoded}/>
				<Link href='/'>
					<a>Go back to home</a>
				</Link>
				<DisqusContainer>
					<Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
				</DisqusContainer>
			</Container>
		</Layout>
	</main>
)


Post._handleNewComment = (comment) => {
	console.log(comment.text)
}

Post.getInitialProps = async ({req, query}) => {
	const base64 = require('js-base64').Base64
	const response = await fetch(`https://api.github.com/repos/gmground/${query.name}/readme`)
	const json = await response.json()
	const decoded = await base64.decode(json.content)
	const title = query.name
	const disqusShortname = 'gmground';
	const disqusConfig = {
		url: 'https://gyumindev.github.io/post/' + title,
		identifier: title,
		title: title,
	};

	return {title, decoded, disqusShortname, disqusConfig}
}

Post.PropTypes = {
	title: PropTypes.string.isRequired,
	convertMarkDown: PropTypes.string.isRequired
}

export default Post