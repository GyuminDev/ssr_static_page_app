import styled from 'styled-components'
import Header from "../components/Header";
import Footer from "../components/Footer"
import Head from 'next/head'
import React from "react";
import API from "../pages/utils/api";
import Post from "../pages/post";


const Wrapper = styled.div`
	padding: 40px 20px 20px 20px;
	height: auto;
	min-height: 500px;
	justify-content: start;
  align-items: center;
  display: flex;
  flex-direction: column;
   opacity: 1;
	//-webkit-appearance: none;
	//display: flex;
	//align-items: center;
	//flex-direction: column;
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
//
// Layout.getInitialProps = async ({query}) => {
//
// 	const title = query.name
// 	console.log(title)
//
// 	return {title}
// }

export default Layout