import * as S from './style';
import dummy from 'fixtures/detail.dummy';
import MemeberIcon from 'assets/Detail/member.svg';
import { truncate } from 'utils/truncate';

const MaxDescriptionLength = 40;

const ProjectBox = () => {
  const truncatedDescription = truncate(dummy.description, MaxDescriptionLength);

  return (
    <S.Container>
      <S.Image />
      <S.Info>
        <S.Title>{dummy.title}</S.Title>
        <S.Description>{truncatedDescription}</S.Description>
        <S.Footer>
          <S.Icon src={MemeberIcon} />
          <S.Peoples>
            {dummy.currentPeople}/{dummy.requirePeople}
          </S.Peoples>
        </S.Footer>
      </S.Info>
    </S.Container>
  );
};

export default ProjectBox;
