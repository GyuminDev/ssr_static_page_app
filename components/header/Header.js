import { Component } from 'react'
import Constant from '../../lib/constant'
import styled from 'styled-components'
import HeaderTitle from './HeaderTitle'
import HeaderNavigation from './HeaderNavigation'
import ScrollLock from 'react-scrolllock';
import SideBar from './SideBar'

const Container = styled.div`
	display: flex;
	transition: all 0.3s;
  justify-content: center;
  align-items: center;
`
const BarIcon = styled.i`
	position: ${props => props.visible ? 'fixed' : 'absolute'};
	top: 35px;
	right: 25px;
	cursor: pointer;
	color: ${props => props.visible ? 'white' : "black"};
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
class Header extends Component {

	state = { visible: false }

	_onClickIcon = () => {
		this.setState({visible: !this.state.visible})
	}

	render() {
		const { visible } = this.state

		return(
			<div>
				<SideBar visible={visible}>
					<SideBarImage src="/static/image_jacket.jpg" />
					<SideBarHeader>{Constant.TITLE}</SideBarHeader>
					{visible ? <ScrollLock /> : ''}
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