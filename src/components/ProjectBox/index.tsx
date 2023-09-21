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
}

const ProjectBox = ({
  name,
  content,
  currentPeople,
  requiredPeople,
  imgUrl,
  id,
  likeCount,
}: ProjectBoxPropsType) => {
  const navigate = useNavigate();

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchLikeStatus = async () => {
      try {
        const response = await instance.get(`/like/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        setIsLiked(response.data.isLiked);
      } catch (error) {
        console.log('좋아요 가져오기 실패');
      }
    };

    fetchLikeStatus();
  }, [id]);

  const addHeart = () => {
    try {
      instance
        .post(`/like/${id}`, null, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then(() => {
          setIsLiked(true);
        });
    } catch (error) {
      setIsLiked(false);
    }
  };

  const deleteHeart = () => {
    try {
      instance
        .delete(`/like/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then(() => {
          setIsLiked(false);
        });
    } catch (error) {
      setIsLiked(true);
    }
  };

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
          {isLiked ? (
            <RedHeart
              style={{
                marginTop: '2px',
                cursor: 'pointer',
              }}
              onClick={deleteHeart}
            />
          ) : (
            <Heart
              style={{ marginTop: '2px', cursor: 'pointer' }}
              onClick={addHeart}
            />
          )}
          <S.Like>{likeCount}</S.Like>
        </S.HeartCount>
      </S.Footer>
    </S.Container>
  );
};

export default ProjectBox;
