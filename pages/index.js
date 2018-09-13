import API from '../lib/api'
import PropTypes from 'prop-types'
import Post from '../components/Post'
import Layout from "../layouts/main"
import NextSeo from "next-seo"

const _getConvertDate = (date) => API.convertDate(date)

const Index = ({postList}) => (
	<Layout title="Home">
		<NextSeo
			config={{
				title: 'Home'
			}}
		/>

		{postList.map(post =>
			<Post name={post.name}
			      description={post.description}
			      created_at={_getConvertDate(post.created_at)}
			      topics={post.topics}
			      key={post.name}
			/>)}
	</Layout>
)

Index.getInitialProps = async () => {
	const response = await API.requestGetRepos()
	const postList = await response.json()

	return {postList}
}

Index.propTypes = {
	postList: PropTypes.array.isRequired
}

export default Index
