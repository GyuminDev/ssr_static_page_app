import Link from 'next/link'
import styled from 'styled-components'

const Navigation = styled.a`
	margin-right: 10px;
	font-weight: 600;
  cursor: pointer;
`

const HeaderNavigation = () => (
	<div>
		<Link href="/">
			<Navigation>홈</Navigation>
		</Link>
		<Link href="/about">
			<Navigation>About</Navigation>
		</Link>
	</div>
)

export default HeaderNavigation