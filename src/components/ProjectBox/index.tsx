import * as S from './style';
import Member from 'assets/MemberIcon';
import Heart from 'assets/Heart';
import { useNavigate } from 'react-router-dom';

interface ProjectBoxPropsType {
  content: string;
  currentPeople: number;
  requiredPeople: number;
  name: string;
  imgUrl: string;
  viewCount: number;
  id: number;
  likeCount: number;
}

const ProjectBox = ({
  name,
  content,
  currentPeople,
  requiredPeople,
  imgUrl,
  viewCount,
  id,
  likeCount,
}: ProjectBoxPropsType) => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.NavigateContainer
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
      >
        <S.ImageContainer>
          <S.Image src={imgUrl} />
        </S.ImageContainer>
        <S.InfoContainer>
          <S.Title>{name}</S.Title>
          <S.Description>{content}</S.Description>
        </S.InfoContainer>
      </S.NavigateContainer>
      <S.Footer>
        <S.MemberCount>
          <Member />
          <S.People>
            {currentPeople}/{requiredPeople}
          </S.People>
        </S.MemberCount>
        <S.HeartCount>
          <Heart />
          <S.Like>{likeCount}</S.Like>
        </S.HeartCount>
      </S.Footer>
    </S.Container>
  );
};

export default ProjectBox;
