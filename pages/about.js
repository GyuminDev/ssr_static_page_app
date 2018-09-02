import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Post from '../components/Post'
import Layout from "../layouts/main";

const Container = styled.section`
	padding: 50px;
	display: flex;
	align-items: center;
	flex-direction: column;
`

const About = () => (
	<main>
		<Layout title="GM Ground">
			<Container>
				<article id="article" aria-live="polite" className="preset-font margin">
					<p><strong>심규민&nbsp;</strong>GyuMin Sim<br/><strong>E-mail</strong>&nbsp;:
						pleasure082@gmail.com<br/><strong>Facebook</strong>&nbsp;:&nbsp;https://www.facebook.com/sim.gyumin<br/><strong>GitHub</strong>&nbsp;:&nbsp;https://github.com/GyuminDev
					</p>
					<p>블로그에는 공부와 업무를 하며 알게된 내용과 관심 분야를 주제로 포스팅 하고 있습니다.&nbsp;<br/>다른 의견이나 질문, 또는 내용의 대한 피드백은 언제나 환영합니다
						:)<br/><br/><br/></p>
					<h3><span><strong>프로젝트</strong></span></h3>
					<p><strong>&nbsp; &nbsp;2018<br/>&nbsp; &nbsp; &nbsp;&nbsp;</strong>사내 솔루션 개발 ing</p>
					<p><strong>&nbsp; &nbsp;2017<br/>&nbsp; &nbsp; &nbsp;&nbsp;</strong>MyDoctor - 머신러닝을 활용한 Health-Care
						Solution&lt;Web(Spring), Android, R&gt;<br/>&nbsp; &nbsp; &nbsp; 한OOOO - Mobile Viewer 제작
							참여(인턴)&lt;Android&gt; 09.01 ~ 12.15&nbsp;</p>
					<h3><span>학력</span></h3>
					<p><strong>&nbsp; &nbsp;2018</strong><br/>&nbsp; &nbsp; &nbsp; 한성대학교 컴퓨터공학과 졸업</p>
					<h3><span>수상경력</span></h3>
					<p><strong>&nbsp; &nbsp;2017</strong><br/>&nbsp; &nbsp; &nbsp; 한성대학교 컴퓨터공학과 2017 캡스톤 디자인 3위 - MyDoctor</p>
				</article>

			</Container>
		</Layout>
	</main>
)


export default About
