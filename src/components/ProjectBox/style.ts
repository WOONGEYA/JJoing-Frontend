import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
    width: 328px;
    height: 360px;
    border-radius: 10px;
    box-shadow: 2px 4px 20px 0px rgba(0, 0, 0, 0.05);
`

export const Image = styled.img`
    width: 100%;
    height: 50%;
    background-color: #CCC;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const Info = styled.div`
    width: 100%;
    height: 50%;
    padding: 18px 18px 0;
    box-sizing: border-box;
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
`

export const Description = styled.div`
    overflow: hidden;
    text-overflow: clip;
    white-space: wrap;
    font-size: 14px;
    font-weight: 400;
`

export const Footer = styled.div`
    margin-top: 58px;
    width: 100%;
    height: 38px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-top: 1px solid ${theme.grey[400]};
`

export const Peoples = styled.h3`
    color: ${theme.secondary};
    font-size: 14px;
    font-weight: 400;
`

export const Icon = styled.img`
    width: 16px;
`