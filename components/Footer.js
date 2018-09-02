import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 70px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-end;
`

function Footer() {
	return (
		<Container>
			<p>2018 Gyumin</p>
		</Container>
	)
}

export default Footer