import React from 'react';
import Header from 'components/Header';
import * as S from './style';
import dummy from 'fixtures/Detail/dumy';
import MemberIcon from 'assets/Detail/member.svg';

const Detail = () => {
    return (
        <>
            <Header />
            <S.Container>
                <S.ProjectBox>
                    <S.MainContents>
                        <S.Image />
                        <S.MainDesc>
                            <S.Title>{dummy.title}</S.Title>
                            <S.DeadLine>📅 모집 기한</S.DeadLine>
                            <S.DeadLine style={{ color: '#ADB5BD' }}>{dummy.deadline}</S.DeadLine>
                            <S.Member>
                                <S.MemberTitle>
                                    <S.MemberIcon src={MemberIcon} />
                                    <span>멤버</span>
                                </S.MemberTitle>
                                <S.MemberImages>
                                    {dummy.memberImage.map((image, index) => (
                                        <S.MemberProfile key={index} src={image} alt={`Member ${index + 1}`} />
                                    ))}
                                </S.MemberImages>
                            </S.Member>
                            <S.Button color= {'#38B57D'}>마이쫑에 추가하기</S.Button>
                            <S.Button color= {'#264466'}>지금 쪼잉하기!!</S.Button>
                        </S.MainDesc>
                    </S.MainContents>
                    <S.CallOut>📋 프로젝트 설명</S.CallOut>
                    <S.Description>{dummy.description}</S.Description>
                    <S.CallOut>🧑‍💻 업무 카테고리</S.CallOut>
                    <S.SubCallOut>👪 개발 분위기</S.SubCallOut>
                    <S.Categories>
                        {dummy.atmosphere.map((value, index) => (
                            <S.Category key={index}>{value}</S.Category>
                        ))}
                    </S.Categories>
                    <S.SubCallOut>🛠 사용 기술</S.SubCallOut>
                    <S.Categories>
                        {dummy.stack.map((value, index) => (
                            <S.Category key={index}>{value}</S.Category>
                        ))}
                    </S.Categories>
                    <S.SubCallOut>🤝 협업 툴</S.SubCallOut>
                    <S.Categories>
                        {dummy.cooperation.map((value, index) => (
                            <S.Category key={index}>{value}</S.Category>
                        ))}
                    </S.Categories>
                </S.ProjectBox>
            </S.Container>
        </>
    );
};

export default Detail;
