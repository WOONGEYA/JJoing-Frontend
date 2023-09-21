import * as S from './style';
import * as F from 'styles/flex';
import trash from 'assets/trash.svg';

interface NotifyBoxProps {
  id: number;
  title: string;
  content: string;
}

function NotifyBox({ id, title, content }: NotifyBoxProps) {
  return (
    <S.Container>
      <S.Element>
        <F.FlexVertical>
          <S.Image />
          <S.TitleBox>
            <S.Element>
              <S.Desciption>{title}</S.Desciption>
            </S.Element>
            <S.SubTitle>{content}</S.SubTitle>
          </S.TitleBox>
        </F.FlexVertical>
      </S.Element>
      <S.Else>
        {/* <S.Icon src={trash} onClick={onDelete} />
        <S.Time>{timestamp}</S.Time> */}
      </S.Else>
    </S.Container>
  );
}

export default NotifyBox;
