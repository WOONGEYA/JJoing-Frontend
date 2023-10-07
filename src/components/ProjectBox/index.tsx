import * as S from './style';
import Member from 'assets/MemberIcon';
import Heart from 'assets/Heart';
import RedHeart from 'assets/RedHeart';
import { useNavigate } from 'react-router-dom';
import instance from 'apis/httpClient';
import { useEffect, useState } from 'react';

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
}: ProjectBoxPropsType) => {
  const navigate = useNavigate();

  const [likes] = useState(likeCount);

  useEffect(() => {
    const fetchLikeStatus = async () => {
      try {
        const response = await instance.get(`/like/${id}/liker`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
      } catch (error) {
        console.log('좋아요 가져오기 실패');
      }
    };

    fetchLikeStatus();
  }, [id]);

  const goToDetail = () => {
    navigate(`/detail/${id}`);
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
          {likeState ? (
            <RedHeart style={{ marginTop: '2px', cursor: 'pointer' }} />
          ) : (
            <Heart style={{ marginTop: '2px', cursor: 'pointer' }} />
          )}
          <span>{likes}</span>
        </S.HeartCount>
      </S.Footer>
    </S.Container>
  );
};

export default ProjectBox;
