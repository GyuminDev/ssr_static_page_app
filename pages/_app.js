import App, { Container } from 'next/app'
import NextSeo from 'next-seo'
import SEO from '../next-seo-config'

export default class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {}
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		return { pageProps }
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<Container>
				<NextSeo config={SEO} />
				<Component {...pageProps} />
			</Container>
		)
	}
}