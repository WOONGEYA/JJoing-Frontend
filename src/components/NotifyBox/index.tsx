import React from 'react';
import * as S from './style';
import * as F from 'styles/flex';
import trash from 'assets/trash.svg';

interface Notification {
  user: string;
  project: string;
  timestamp: string;
}

interface NotifyBoxProps {
  notification: Notification;
  onDelete: () => void;
}

function NotifyBox({ notification, onDelete }: NotifyBoxProps) {
  const { user, project, timestamp } = notification;

  return (
    <S.Container>
      <S.Element>
        <F.FlexVertical>
          <S.Image />
          <S.Element>
            <S.Desciption>
              {user} 님이 {project} 프로젝트 쪼잉을 수락하셨어요.
            </S.Desciption>
            <S.CallOut>
              이제부터 {project} 프로젝트의 일원이 되셨어요!
            </S.CallOut>
          </S.Element>
        </F.FlexVertical>
      </S.Element>
      <S.Else>
        <S.Icon src={trash} onClick={onDelete} />
        <S.Time>{timestamp}</S.Time>
      </S.Else>
    </S.Container>
  );
}

export default NotifyBox;
