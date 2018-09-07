import Link from 'next/link'
import styled from 'styled-components'

const Navigation = styled.a`
	margin-right: 10px;
	font-weight: 600;
  cursor: pointer;
`

const HeaderNavigation = () => (
	<div>
		<Link prefetch href="/">
			<Navigation>홈</Navigation>
		</Link>
		<Link prefetch href="/about">
			<Navigation>About</Navigation>
		</Link>
	</div>
)

export default HeaderNavigation