import Header from "../components/Header";
import Footer from "../components/Footer"
import Head from 'next/head'
import React from "react";


function Layout({children, title}) {
	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>

			<Header/>

			{children}

			<Footer/>
		</div>
	)
}

export default Layout