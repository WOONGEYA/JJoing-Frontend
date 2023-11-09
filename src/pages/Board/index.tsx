import Layout from 'components/Layout';
import * as S from './style';
import notifications from 'fixtures/notify.dummy';
import EyeIcon from 'assets/EyeIcon';
import MessageIcon from 'assets/MessageIcon';
import { useNavigate } from 'react-router-dom';

const Board = () => {
  console.log(notifications);
  const router = useNavigate();
  return (
    <Layout>
      <S.Container>
        {notifications.map((data, i) => (
          <S.BoardBoxContainer
            key={i}
            onClick={() => {
              router(`/boards/${i}`);
            }}
          >
            <S.ProfileInfoContainer>
              <div>{data.project}</div>
              <div>{data.user}</div>
            </S.ProfileInfoContainer>
            <S.ProjectDetail>
              <S.DetailDay>{data.timestamp}</S.DetailDay>
            </S.ProjectDetail>
            <S.Detail>
              <S.DetailBox>
                <EyeIcon />
                10234
              </S.DetailBox>
              <S.DetailBox>
                <MessageIcon />
                fds
              </S.DetailBox>
              <S.DetailDay>2023일 전</S.DetailDay>
            </S.Detail>
          </S.BoardBoxContainer>
        ))}
      </S.Container>
    </Layout>
  );
};

export default Board;
