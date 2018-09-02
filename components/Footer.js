import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.footer` 
	display: flex;
	justify-content: center;
	align-items: end;
	height: 50px;
`

function Footer() {
	return (
		<Container>
			<p>2018 Gyumin</p>
		</Container>
	)
}

export default Footer