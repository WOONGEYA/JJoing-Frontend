import * as S from './style';
import Member from 'assets/MemberIcon';

interface ProjectBoxPropsType {
  content: string;
  currentPeople: number;
  requiredPeople: number;
  name: string;
}

const ProjectBox = ({
  name,
  content,
  currentPeople,
  requiredPeople,
}: ProjectBoxPropsType) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image />
      </S.ImageContainer>
      <S.Info>
        <S.InfoContainer>
          <S.Title>{name}</S.Title>
          <S.Description>{content}</S.Description>
        </S.InfoContainer>
        <S.Footer>
          <Member />
          <S.People>
            {currentPeople}/{requiredPeople}
          </S.People>
        </S.Footer>
      </S.Info>
    </S.Container>
  );
};

export default ProjectBox;
