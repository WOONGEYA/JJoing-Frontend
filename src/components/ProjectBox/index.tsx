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
      <S.Image />
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
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
