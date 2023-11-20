import * as S from './style';
import Member from 'assets/MemberIcon';
import LikeIcon from 'assets/LikeIcon';
import { useNavigate } from 'react-router-dom';
import theme from 'styles/theme';
import { useMutation, useQueryClient } from 'react-query';
import { addProjectDetail, deleteHeart } from 'apis';
import { ProjectLiked } from 'contents/queryKey';
import EyeIcon from 'assets/EyeIcon';

interface ProjectBoxPropsType {
  content: string;
  currentPeople: number;
  requiredPeople: number;
  name: string;
  imgUrl: string;
  viewCount: number;
  id: number;
  likeCount: number;
  likeState: boolean;
}

const ProjectBox = ({
  name,
  content,
  currentPeople,
  requiredPeople,
  imgUrl,
  id,
  likeCount,
  likeState,
  viewCount,
}: ProjectBoxPropsType) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/${id}`);
  };

  const queryClient = useQueryClient();

  const addProjects = useMutation({
    mutationFn: () => addProjectDetail(Number(id)),
    onSuccess: () => {
      queryClient.invalidateQueries([ProjectLiked]);
    },
  });

  const postBoardMutate = useMutation({
    mutationFn: () => deleteHeart(Number(id)),
    onSuccess: () => {
      queryClient.invalidateQueries([ProjectLiked]);
    },
  });

  const deleteMyJJoing = () => {
    if (likeState === true) {
      postBoardMutate.mutate();
    } else {
      addProjects.mutate();
    }
  };

  return (
    <S.Container>
      <S.NavigateContainer onClick={goToDetail}>
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
          <EyeIcon color={theme.secondary} />
          <span style={{ marginRight: '7px' }}>{viewCount}</span>
          <LikeIcon
            color={likeState ? theme.red : theme.secondary}
            filled={likeState}
            style={{ cursor: 'pointer' }}
            onClick={deleteMyJJoing}
          />
          <span>{likeCount}</span>
        </S.HeartCount>
      </S.Footer>
    </S.Container>
  );
};

export default ProjectBox;
