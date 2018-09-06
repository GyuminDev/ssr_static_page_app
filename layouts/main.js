import styled from 'styled-components'
import Header from "../components/header/Header";
import Footer from "../components/Footer"
import Head from 'next/head'

const Wrapper = styled.div`
	padding: 40px 20px 20px 20px;
	height: auto;
	min-height: 500px;
	justify-content: start;
  align-items: center;
  display: flex;
  flex-direction: column;
   opacity: 1;
`


function Layout({children, title}) {
	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>

			<Header/>

			<Wrapper>
			{children}
			</Wrapper>

			<Footer title={title}/>
		</div>
	)
}

export default Layout