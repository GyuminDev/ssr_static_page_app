import styled from 'styled-components'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Container = styled.div`
	background-color:white;
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 10px;
  box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3), 0 5px 12px rgba(133, 133, 133, 0.22);
`
const ContainerHeader = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: space-between;
	flex-direction: row;
`
const Created_at = styled.div`
	align-self: end;
	font-size: 12px;
`
const Title = styled.div`
	align-self: flex-start;
	font-weight: bold;
`
const Description = styled.div`
	width: 100%;
	align-self: flex-start;
`
const ContainerFooter = styled.div`
	display: flex;
	justify-content: end;
	flex-direction: column;
`
const Button = styled.button`
	align-self: flex-end;
`


function Post({name, description, created_at}) {
	return (
		<Container>
			<ContainerHeader>
				<Title center>
					<h2>{name}</h2>
				</Title>
				<Created_at>{created_at}</Created_at>
			</ContainerHeader>
			<Description>{description}</Description>
			<ContainerFooter>
				<Link href={{pathname: '/post', query: {name: name}}} as={`${process.env.ASSET_PREFIX}/post/${name}`}>
					<Button>Read more...</Button>
				</Link>
			</ContainerFooter>
		</Container>
	)
}

Post.PropTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
}

export default Post