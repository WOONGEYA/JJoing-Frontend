import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 300px;
    background-color: #F7F8F9;
    padding: 60px 200px 25px;
    box-sizing: border-box;
    font-family: Pretendard;
`

export const Logo = styled.img`
    width: 122px;
`

export const List = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #9EA4AA;
    margin-bottom: 24px;
`

export const Title = styled.h2`
    color: rgba(38, 68, 102, 0.80);
    font-weight: 700;
    font-size: 18px;
    font-style: normal;
    line-height: 20px;
    cursor: default;
`

export const HeadLine = styled.div`
    display: flex;
    align-items: center;
    gap: 22px;
`

export const HeadLineElement = styled.span`
    color: var(--gray-500, #72787F);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    height: 25px;
    h2{
        font-weight: 500;
        color: #72787F;
        font-size: 15px;
        margin-right: 5px;
    }
    span{
        color: #9EA4AA;
        font-size: 15px;
    }
`

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        margin: 0;
    }
`

export const CopyRight = styled.h2`
    color: var(—gray-500, #72787F);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
`