import React from 'react'
import styled, {injectGlobal} from 'styled-components'
import Layout from "../layouts/main";

injectGlobal`
	a {
		color: black;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
`
const Container = styled.div`

`
const ProfileImage = styled.img`
	border-radius: 50%;
	width: 150px;
	height: auto;
`
const ProfileHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	word-break: break-all;
`
const ProfileColumn = styled.div`
	margin-top: 10px;
	text-align: start;
`

const About = () => (
	<Layout title="GM Ground">
		<Container>
			<ProfileHeader>
				<ProfileImage src="/static/profile_image.jpg" alt="Avatar"/>
				<br/>
				<strong>심규민&nbsp;</strong>GyuMin Sim
			</ProfileHeader>
			<ProfileColumn>
				<br/><strong>E-mail</strong>&nbsp;<a href="http://pleasure082@gmail.com">pleasure082@gmail.com</a>
				<br/><strong>Facebook</strong>&nbsp;<a href="http://www.facebook.com/sim.gyumin">Link</a>
				<br/><strong>GitHub</strong>&nbsp;<a href="http://github.com/GyuminDev">Link</a>
			</ProfileColumn>
			<ProfileColumn>
				<p>
					블로그에는 공부와 업무를 하며 알게된 내용과 관심 분야를 주제로 포스팅 하고 있습니다.
					<br/>
					다른 의견이나 질문, 또는 내용의 대한 피드백은 언제나 환영합니다 :)
				</p>
			</ProfileColumn>
			<ProfileColumn>
					<h3>프로젝트</h3>
					<h4>2018</h4>
					사내 솔루션 개발 ing
					<h4>2017</h4>
					MyDoctor - 머신러닝을 활용한 Health-Care Solution
					<br/>
					한OOOO - Mobile Viewer 제작 참여(인턴) 09.01 ~ 12.15
			</ProfileColumn>
		</Container>
	</Layout>
)


export default About
