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
	position: fixed;
	top: 35px;
	left: 25px;
	cursor: pointer;
	color: ${props => props.visible ? 'white' : "black"};
`

const SideBar = styled.div`
	position: fixed;
  top: 0;
  left: ${ props => props.visible ? 0 : "-300px" };
  height: 100%;
  width: 300px;
  margin: auto;
  opacity: 0.5;
  background-color: black;
  -moz-transition:all 200ms ease-in;
    -webkit-transition:all 200ms ease-in;
    -o-transition:all 200ms ease-in;
    transition:all 200ms ease-in;
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
				<SideBar visible={visible} />
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