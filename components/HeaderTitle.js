import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.h2`
	padding: 10px 30px 10px 30px;
	background-color: #2c3e50;
	min-width: 120px;
	color: white;
	font-weight: 300;
  -webkit-appearance: none;
  cursor: pointer;
`

function HeaderTitle({title}) {
	return (
			<Link href="/">
				<Title>{title}</Title>
			</Link>
	)
}

export default HeaderTitle