import * as S from './style'
import Logo from 'assets/logo.svg'

const Footer = () => {
	return (
		<S.Container>
			<S.Logo src={Logo} />
			<S.List>
				<S.Title>소마고 연합 사이드 프로젝트 모집 플랫폼</S.Title>
				<S.HeadLine>
					<S.HeadLineElement>이용약관</S.HeadLineElement>
					<S.HeadLineElement>개인정보처리방침</S.HeadLineElement>
					<S.HeadLineElement>공지사항</S.HeadLineElement>
					<S.HeadLineElement>문의하기</S.HeadLineElement>
					<S.HeadLineElement>FAQ | QNA</S.HeadLineElement>
				</S.HeadLine>
			</S.List>
			<S.Info>
				<h2>Tel:</h2>
				<span>010 - 1234 - 5678</span>
			</S.Info>
			<S.Info>
				<h2>E-mail:</h2>
				<span>jjoing.woong@gmail.com</span>
			</S.Info>
			<S.Info>
				<h2>공동대표:</h2>
				<span>강웅빈 . 고윤영 . 이상진 . 이희성 . 한예준</span>
			</S.Info>
			<S.Flex>
				<S.Info>
					<h2>위치:</h2>
					<span>부산광역시 강서구 가락대로 1393</span>
				</S.Info>
				<S.CopyRight>Copyright Woong ltd. Alright reserved.</S.CopyRight>
			</S.Flex>
		</S.Container>
	);
};

export default Footer;