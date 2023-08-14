import React, { ChangeEvent, useState } from 'react';
import Header from 'components/Header';
import * as S from './style';
import * as Flex from 'styles/flex';
import searchIcon from 'assets/search.svg';
import trash from 'assets/trash.svg';
import NotifyBox from 'components/NotifyBox';
import notifications from 'fixtures/notify.dummy';
import NoNotify from 'components/NoNotify/index';

interface Notification {
  user: string;
  project: string;
  timestamp: string;
}

function Notify() {
  const [notificationData, setNotificationData] = useState<Notification[]>(notifications);
  const [userInput, setUserInput] = useState<string>('');

  function handleDeleteAll() {
    setNotificationData([]);
  }

  function handleDeleteOne(index: number) {
    const newNotifications = [...notificationData];
    newNotifications.splice(index, 1);
    setNotificationData(newNotifications);
  }

  const filteredNotifications = notificationData.filter(
    (notification) =>
      notification.user.toLowerCase().includes(userInput.toLowerCase()) ||
      notification.project.toLowerCase().includes(userInput.toLowerCase()),
  );

  return (
    <>
      <Header />
      <S.Container>
        <S.NotifiHeader>
          <S.SearchWrapper>
            <S.Icon src={searchIcon} alt='Search' />
            <S.Search
              type='search'
              placeholder='검색어를 입력해주세요.'
              value={userInput}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setUserInput(e.target.value)}
            />
          </S.SearchWrapper>
          <Flex.FlexVertical style={{ gap: '12px' }}>
            <S.NotifiAmount>알림 {filteredNotifications.length} / 100</S.NotifiAmount>
            <S.DeleteNotifi onClick={handleDeleteAll}>
              <S.Icon src={trash} alt='Trash' />
              모든 알림 삭제하기
            </S.DeleteNotifi>
          </Flex.FlexVertical>
        </S.NotifiHeader>
        {filteredNotifications.length === 0 ? (
          <NoNotify />
        ) : (
          <S.Notifications>
            {filteredNotifications.map((notification, index) => (
              <NotifyBox notification={notification} key={index} onDelete={() => handleDeleteOne(index)} />
            ))}
          </S.Notifications>
        )}
      </S.Container>
    </>
  );
}

export default Notify;
