import styled from 'styled-components'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Container = styled.div`
	background-color:white;
	-webkit-appearance: none;
	width: 500px;
  display: inline-block;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 20px;
  box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3), 0 5px 12px rgba(133, 133, 133, 0.22);
    @media screen and (min-width: 320px) and (max-width: 667px){
     width: 100px;
 	}
 	@media screen and (min-width: 320px) and (max-width: 667px) and (orientation: portrait) {
    width: 90%;
	}
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
	padding-left: 10px;
	align-self: flex-start;
	color: #7f8c8d;
	overflow: hidden; 
  text-overflow: ellipsis;
  white-space: nowrap; 
`
const ContainerFooter = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`
const Button = styled.button`
	margin-top: 10px;
	padding: 10px;
	background-color: #2c3e50;
	color: white;
	font-weight: 100;
  cursor: pointer;
`
const TopicContainer = styled.div`
	display: flex;
	align-items: flex-end;
`

const Topic = styled.div`
    display: inline-block;
    padding: 0 25px;
    margin-right: 5px;
    height: 25px;
    font-size: 12px;
    line-height: 25px;
    border-radius: 25px;
    background-color: #f1f1f1;
`


const Post = ({name, description, created_at, topics}) => (
	<Container>
		<ContainerHeader>
			<Title center>
				<h2>{name}</h2>
			</Title>
			<Created_at>{created_at}</Created_at>
		</ContainerHeader>
		<Description>
			{description}
		</Description>
		<ContainerFooter>
			<TopicContainer>
			{topics.map(topic =>
				<Topic>{topic}</Topic>)}
			</TopicContainer>
			<Link
				prefetch
				href={
					{
						pathname: '/post',
						query: {
							name: name,
							description: description
						}
					}
				}
				as={`${process.env.ASSET_PREFIX}/post/${name}`}>
				<Button>더 읽어보기</Button>
			</Link>
		</ContainerFooter>
	</Container>
)

Post.PropTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
}

export default Post