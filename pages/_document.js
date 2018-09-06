import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

export default class MyDocument extends Document {
	static getInitialProps({renderPage}) {
		const sheet = new ServerStyleSheet()
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
		const styleTags = sheet.getStyleElement()
		return {...page, styleTags}
	}

	render() {
		return (
			<html>
				<Head>
					<meta charSet="utf-8"/>
					<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
					<link href="https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding" rel="stylesheet" />
					<link rel="stylesheet" href="/static/font.css" />
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
					      integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
					      crossOrigin="anonymous" />
					{this.props.styleTags}
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</html>
		)
	}
}