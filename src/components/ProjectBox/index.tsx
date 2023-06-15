import React from 'react';
import * as S from './style';
import MainImg from '../../assets/testImg.png';

interface ProjectBoxProps {
  title: string;
  subtitle: string;
  de: number;
  fe: number;
  be: number;
  isCompleted: string;
}

const ProjectBox = ({ title, subtitle, de, fe, be, isCompleted }: ProjectBoxProps) => {
  return (
    <S.Container>
      <S.MainImg src={MainImg} />
      <S.TextArea>
        <S.Title>
          <S.TitleText>{title}</S.TitleText>
          <S.SubTitle>{subtitle}</S.SubTitle>
        </S.Title>
      </S.TextArea>
      <S.Statuses>
        <S.StateArea>
          <S.Light></S.Light>
          <S.State>{isCompleted}</S.State>
        </S.StateArea>
        <S.Categories>
          <S.Category>DE {de}명</S.Category>
          <S.Category>FE {fe}명</S.Category>
          <S.Category>BE {be}명</S.Category>
        </S.Categories>
      </S.Statuses>
    </S.Container>
  );
};

export default ProjectBox;
