import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import ReactMarkDown from 'react-markdown'
import { base64 }from 'js-base64'
import Layout from "../layouts/main";

const Post = ({title, decoded}) => (
	<main>
		<Layout title={title}>
			<ReactMarkDown source={decoded}/>
			<Link href='/'>
				<a>Go back to home</a>
			</Link>
		</Layout>
	</main>
)

Post.getInitialProps = async ({req, query}) => {
	const base64 = require('js-base64').Base64
	const response = await fetch(`https://api.github.com/repos/gmground/${query.name}/readme`)
	const json = await response.json()
	const decoded = await base64.decode(json.content)
	const title = query.name

	return { title, decoded }
}

Post.PropTypes = {
	title: PropTypes.string.isRequired,
	convertMarkDown: PropTypes.string.isRequired
}

export default Post