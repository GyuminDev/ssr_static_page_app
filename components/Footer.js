import styled from 'styled-components'
import React from "react";
import PropTypes from 'prop-types'
import { animateScroll } from 'react-scroll'

const Container = styled.footer` 
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	padding:  0 20px 0 20px;
`
const Icon = styled.i`
	cursor: pointer;
	color: black;
`
const PrevIcon = styled.i`
	cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
	color: black;
	opacity: ${props => props.disabled ? 0.1 : 1};
`

const _onClickPrev = () => {
	history.back()
}
const _onClickTop = () => {
	animateScroll.scrollToTop()
}

function Footer({title}) {
	const isHome = title === 'GM Ground'
	return (
		<Container>
			<PrevIcon disabled={isHome} className="fas fa-arrow-left fa-2x" onClick={_onClickPrev}/>
			<p>2018 Gyumin</p>
			<Icon className="fas fa-arrow-up fa-2x" onClick={_onClickTop}/>
		</Container>
	)
}

Footer.propTypes = {
	title: PropTypes.string.isRequired
}

export default Footer