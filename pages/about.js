import NextSeo from 'next-seo';
import styled, {injectGlobal} from 'styled-components'
import Layout from "../layouts/main";
import Constant from '../lib/constant'

injectGlobal`
	a {
		color: black;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
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
const ProfileIcon = styled.div`
	font-size: 12px;
	margin-top: 10px;
	text-align: start;
`
const ProfileColumn = styled.div`
	margin-top: 10px;
	padding-top: 20px;
	text-align: start;
`

const About = () => (
	<Layout title={Constant.ABOUT_TITLE}>
		<NextSeo
			config={{
				title: Constant.ABOUT_TITLE,
				description: Constant.ABOUT_DESC,
				openGraph: {
					url: Constant.ABOUT_PAGE_URL,
					title: 'GM Ground - about',
					description: Constant.ABOUT_DESC,
					images: [{
						url: Constant.BASE_URL + 'static/profile_image.jpg',
						width: 800,
						height: 800,
						alt: 'profile image'
					}]
				}
			}}
		/>
		<ProfileHeader>
			<ProfileImage src='/static/profile_image.jpg' alt="Avatar"/>
			<br/>
			<strong>심규민&nbsp;</strong>GyuMin Sim
			<ProfileIcon>
				<a href={Constant.EMAIL}><i className="far fa-envelope fa-2x" /></a>&nbsp;&nbsp;
				<a href={Constant.FACEBOOK}><i className="fab fa-facebook-square fa-2x" /></a>&nbsp;&nbsp;
				<a href={Constant.GITHUB}><i className="fab fa-github-alt fa-2x" /></a>
			</ProfileIcon>
		</ProfileHeader>
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
	</Layout>
)


export default About
