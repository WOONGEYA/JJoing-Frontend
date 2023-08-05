import React from 'react';
import Header from 'components/Header';
import * as S from './style';
import * as Flex from 'styles/flex'
import searchIcon from 'assets/search.svg';
import trash from 'assets/trash.svg'

const Notifi = () => {
    return (
        <>
            <Header />
            <S.Container>
                <S.NotifiHeader>
                    <S.SearchWrapper>
                        <S.Icon src={searchIcon} alt='Search' />
                        <S.Search
                            type='text'
                            placeholder='검색어를 입력해주세요.'
                        />
                    </S.SearchWrapper>
                    <Flex.FlexVertical style={{gap: '12px'}}>
                        <S.NotifiAmount>알림 6 / 100</S.NotifiAmount>
                        <S.DeleteNotifi>
                            <S.Icon src={trash} alt='Trash' />
                            모든 알림 삭제하기
                        </S.DeleteNotifi>
                    </Flex.FlexVertical>
                </S.NotifiHeader>
                <S.Notifications>
                    <Notifi />
                </S.Notifications>
            </S.Container>
        </>
    );
};

export default Notifi;
