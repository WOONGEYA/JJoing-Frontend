import * as S from './style';
import Member from 'assets/Member';

interface ProjectBoxPropsType {
  title: string;
  description: string;
  currentPeople: number;
  requiredPeople: number;
}

const ProjectBox = ({
  title,
  description,
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
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
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
