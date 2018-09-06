import API from './utils/api'
import PropTypes from 'prop-types'
import moment from 'moment'
import Post from '../components/Post'
import Layout from "../layouts/main";

const _getConvertDate = (date) => {
	return moment(new Date(date)).format("YYYY-MM-DD a hh:mm") + ' created'
}

const Index = ({postList}) => (
	<main>
		<Layout title="GM Ground">
				{postList.map(post =>
					<Post name={post.name}
					      description={post.description}
					      created_at={_getConvertDate(post.created_at)}
					      key={post.name}
					/>)}
		</Layout>
	</main>
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
