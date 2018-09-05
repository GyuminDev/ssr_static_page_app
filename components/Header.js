import React from 'react'
import styled from 'styled-components'
import HeaderTitle from './HeaderTitle'
import HeaderNavigation from './HeaderNavigation'

const Container = styled.div`
	display: flex;
	transition: all 0.3s;
  justify-content: center;
  align-items: center;
`
const BarIcon = styled.i`
	position: absolute;
	top: 35px;
	right: 25px;
	cursor: pointer;
	color: ${props => props.visible ? 'white' : "black"};
`
const SideBar = styled.div`
	position: fixed;
  top: 0;
  right: ${ props => props.visible ? 0 : "-375px" };
  height: 100%;
  width: 375px;
  margin: auto;
  background-color: black;
  -moz-transition:all 200ms ease-in;
  -webkit-transition:all 200ms ease-in;
  -o-transition:all 200ms ease-in;
  transition:all 200ms ease-in;
  box-shadow : ${ props => props.visible ? "rgba(0,0,0,0.5) 0 0 0 9999px, rgba(0,0,0,0.5) 2px 2px 3px 3px" : 0 }; 
  @media screen and (min-width: 320px) and (max-width: 667px){
     width: 100%;
     right: ${ props => props.visible ? 0 : "-100%" };
 	}
 	@media screen and (min-width: 320px) and (max-width: 667px) and (orientation: portrait) {
    width: 100%;
    right: ${ props => props.visible ? 0 : "-100%" };
	}
`
const SideBarImage = styled.img`
	position: absolute;
	top: 0;
	width: 100%;
	height: 400px;
	opacity: 1;
`
const SideBarHeader = styled.h1`
	position: absolute;
	width: 100%;
	top: 150px;
	left: 25%;
	color: white;
`
class Header extends React.Component {

	state = { visible: false }

	_onClickIcon = () => {
		this.setState({visible: !this.state.visible})
	}

	render() {
		const {visible} = this.state
		return(
			<div>
				<SideBar visible={visible}>
					<BarIcon visible={visible} className="fas fa-bars fa-2x" onClick={this._onClickIcon}/>
					<SideBarImage src="/static/image_jacket.jpg"/>
					<SideBarHeader>GM Ground</SideBarHeader>
				</SideBar>
				<Container>
					<BarIcon visible={visible} className="fas fa-bars fa-2x" onClick={this._onClickIcon}/>
					<HeaderTitle title="GM Ground" />
				</Container>
				<Container>
					<HeaderNavigation />
				</Container>
			</div>
		)
	}
}

export default Header