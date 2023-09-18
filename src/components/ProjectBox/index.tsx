import * as S from './style';
import Member from 'assets/MemberIcon';
import Heart from 'assets/Heart';

interface ProjectBoxPropsType {
  content: string;
  currentPeople: number;
  requiredPeople: number;
  name: string;
  imgUrl: string;
  viewCount: number;
}

const ProjectBox = ({
  name,
  content,
  currentPeople,
  requiredPeople,
  imgUrl,
  viewCount,
}: ProjectBoxPropsType) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={imgUrl} />
      </S.ImageContainer>
      <S.Info>
        <S.InfoContainer>
          <S.Title>{name}</S.Title>
          <S.Description>{content}</S.Description>
        </S.InfoContainer>
        <S.Footer>
          <S.MemberCount>
            <Member />
            <S.People>
              {currentPeople}/{requiredPeople}
            </S.People>
          </S.MemberCount>
          <S.HeartCount>
            <Heart />
            <S.Like>{viewCount}</S.Like>
          </S.HeartCount>
        </S.Footer>
      </S.Info>
    </S.Container>
  );
};

export default ProjectBox;
