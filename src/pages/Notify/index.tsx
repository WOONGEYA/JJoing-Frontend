import React, { useState } from 'react';
import Header from 'components/Header';
import * as S from './style';
import * as Flex from 'styles/flex';
import trash from 'assets/trash.svg';
import NoNotify from 'components/NoNotify/index';
import Search from 'components/Search';
import instance from 'apis/httpClient';
import NotifyBox from 'components/NotifyBox';
import { toast } from 'react-toastify';

interface alarmList {
  id: number;
  title: string;
  content: string;
  projectId: number;
}

function Notify() {
  const [userInput, setUserInput] = useState<string>('');
  const [alarmList, setAlarmList] = useState<alarmList[]>([]);

  const handleDeleteAll = () => {
    const fetchData = async () => {
      try {
        await instance.delete('/notification');
        window.location.reload();
      } catch (error) {
        toast.error('알림 삭제 실패');
      }
    };
    fetchData();
  };

  const filteredNotifications = alarmList.filter((alarmList) =>
    alarmList.title.toLowerCase().includes(userInput.toLowerCase()),
  );

  console.log('alarmList', alarmList);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await instance.get('/notification');
        setAlarmList(data);
      } catch (error) {
        console.log('에러');
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.NotifiHeader>
          <Search value={userInput} onChange={setUserInput} />
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
            {alarmList.reverse().map((data, index) => (
              <NotifyBox
                key={index}
                id={data.id}
                title={data.title}
                content={data.content}
                projectId={data.projectId}
              />
            ))}
          </S.Notifications>
        )}
      </S.Container>
    </>
  );
}

export default Notify;
