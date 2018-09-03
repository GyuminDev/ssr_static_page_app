import styled from 'styled-components'
import HeaderTitle from './HeaderTitle'
import HeaderNavigation from './HeaderNavigation'

const Container = styled.div`
	display: flex;
	transition: all 0.3s;
  justify-content: center;
  align-items: center;
`

function Header() {
	return (
		<div>
			<Container>
				<HeaderTitle title="GM Ground" />
			</Container>
			<Container>
				<HeaderNavigation />
			</Container>
		</div>
	)
}

export default Header