import Disqus from 'disqus-react'
import NextSeo from "next-seo"
import {base64} from 'js-base64'
import API from '../lib/api'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactMarkDown from 'react-markdown'
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
const Post = ({title, description, decoded, disqusShortname, disqusConfig}) => (
		<Layout title={"GM Ground" + " - " + title}>
			<NextSeo
				config={{
					title: title,
					description: description,
					openGraph: {
						url: `https://gyumindev.github.io/${title}`,
						title: `GM Ground - ${title}`,
						description: description,
						images: [{
							url: `https://gyumindev.github.io/static/image_jacket.jpg`,
							width: 800,
							height: 800,
							alt: 'post image'
						}]
					}
				}}
			/>
			<Container>
				<ReactMarkDown source={decoded}/>
				<DisqusContainer>
					<Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
				</DisqusContainer>
			</Container>
		</Layout>
)

Post._handleNewComment = (comment) => {
	console.log(comment.text)
}

Post.getInitialProps = async ({req, query}) => {
	const base64 = require('js-base64').Base64
	const response = await API.requestGetReadMe(query.name)
	const json = await response.json()
	const decoded = await base64.decode(json.content)
	const title = query.name
	const description = query.description
	const disqusShortname = 'gmground';
	const disqusConfig = {
		url: 'https://gyumindev.github.io/post/' + title,
		identifier: title,
		title: title,
	};

	return {title, description, decoded, disqusShortname, disqusConfig}
}

Post.PropTypes = {
	title: PropTypes.array.isRequired,
	decoded: PropTypes.string.isRequired,
	disqusShortname: PropTypes.string.isRequired,
	disqusConfig: PropTypes.string.isRequired
}

export default Post