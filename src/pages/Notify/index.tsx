import React, { useState } from 'react';
import Header from 'components/Header';
import * as S from './style';
import * as Flex from 'styles/flex';
import trash from 'assets/trash.svg';
import notifications from 'fixtures/notify.dummy';
import NoNotify from 'components/NoNotify/index';
import Search from 'components/Search';
import instance from 'apis/httpClient';
import NotifyBox from 'components/NotifyBox';

interface Notification {
  user: string;
  project: string;
  timestamp: string;
}

interface alarmList {
  id: number;
  title: string;
  content: string;
}

function Notify() {
  const [notificationData, setNotificationData] =
    useState<Notification[]>(notifications);
  const [userInput, setUserInput] = useState<string>('');
  const [alarmList, setAlarmList] = useState<alarmList[]>([]);

  function handleDeleteAll() {
    setNotificationData([]);
  }

  const filteredNotifications = alarmList.filter((alarmList) =>
    alarmList.title.toLowerCase().includes(userInput.toLowerCase()),
  );

  console.log(alarmList[0]?.title);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await instance.get('/notification', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setAlarmList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.NotifiHeader>
          <Search value={userInput} onChange={setUserInput} />{' '}
          <Flex.FlexVertical style={{ gap: '12px' }}>
            <S.NotifiAmount>{alarmList.length} / 100</S.NotifiAmount>
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
            {alarmList.map((data, index) => (
              <NotifyBox
                key={index}
                id={data.id}
                title={data.title}
                content={data.content}
              />
            ))}
          </S.Notifications>
        )}
      </S.Container>
    </>
  );
}

export default Notify;
