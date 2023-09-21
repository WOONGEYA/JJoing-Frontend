import * as S from './style';
import * as F from 'styles/flex';
import trash from 'assets/trash.svg';
import instance from 'apis/httpClient';

interface NotifyBoxProps {
  id?: number;
  title?: string;
  content?: string;
}

const onDelete = ({ id }: NotifyBoxProps) => {
  const fetchData = async () => {
    try {
      const { data } = await instance.delete(`/notification/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  window.location.reload();
  fetchData();
};

function NotifyBox({ id, title, content }: NotifyBoxProps) {
  return (
    <S.Container>
      <S.Element>
        <F.FlexVertical>
          <S.TitleBox>
            <S.Element>
              <S.Desciption>{title}</S.Desciption>
            </S.Element>
            <S.SubTitle>{content}</S.SubTitle>
          </S.TitleBox>
        </F.FlexVertical>
      </S.Element>
      <S.Else>
        <S.Icon
          src={trash}
          style={{ marginRight: '30px', cursor: 'pointer' }}
          onClick={() => onDelete({ id })}
        />
      </S.Else>
    </S.Container>
  );
}

export default NotifyBox;
