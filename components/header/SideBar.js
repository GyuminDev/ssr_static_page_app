import styled from "styled-components";
import React from "react";

const Container = styled.div`
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

function SideBar({visible, children}) {
	return (
		<Container visible={visible}>
			{children}
		</Container>
	)
}


export default SideBar