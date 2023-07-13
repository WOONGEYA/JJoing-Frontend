import React from 'react';
import * as S from './style';

export default function Footer() {
	return (
		<S.FooterContainer>
			<S.FooterTopDiv>
				<S.UnderText>이용약관</S.UnderText>
				<S.UnderText>개인정보처리방침</S.UnderText>
				<S.UnderText>공지사항</S.UnderText>
				<S.UnderText>문의하기</S.UnderText>
				<S.UnderText>FAQ | QNA</S.UnderText>
			</S.FooterTopDiv>
			<S.FooterDiv>
				<S.FooterText>
					<S.Text>Tel. 010-4401-1234</S.Text>
					<S.Text>Email. Zoing@woong.com</S.Text>
					<S.Text>Office. BSSM, Gangseo-gu, Busan, Republic of Korea</S.Text>
					<S.Text>공동대표. 강웅빈, 고윤영, 이상진, 이희성, 한예준</S.Text>
				</S.FooterText>
			</S.FooterDiv>
			<S.FooterDiv2>
				<S.UnderText>Copyright Woong itd. All rights reserved.</S.UnderText>
			</S.FooterDiv2>
		</S.FooterContainer>
	);
}
