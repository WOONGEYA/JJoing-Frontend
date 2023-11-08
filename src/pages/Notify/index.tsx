import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import * as S from './style';
import * as Flex from 'styles/flex';
import trash from 'assets/trash.svg';
import NoNotify from 'components/NoNotify/index';
import Search from 'components/Search';
import instance from 'apis/httpClient';
import NotifyBox from 'components/NotifyBox';
import { toast } from 'react-toastify';
import { NewProject } from 'pages/Explore';

interface alarmList {
  id: number;
  title: string;
  content: string;
  projectId: number;
}

function Notify() {
  const [userInput, setUserInput] = useState<string>('');
  const [alarmList, setAlarmList] = useState<alarmList[]>([]);
  const [newArrs, setNewArrs] = useState<number[]>([]);

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

  const filteredAlarmList = alarmList.filter((alarm) =>
    newArrs.includes(alarm.projectId),
  );

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

  useEffect(() => {
    instance.get('/project').then((res) => {
      const ids = res.data.map((el: NewProject) => el.id);
      setNewArrs(ids);
    });
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.NotifiHeader>
          <Search value={userInput} onChange={setUserInput} />
          <Flex.FlexVertical style={{ gap: '12px' }}>
            <S.NotifiAmount>{filteredAlarmList.length} / 100</S.NotifiAmount>
            <S.DeleteNotifi onClick={handleDeleteAll}>
              <S.Icon src={trash} alt='Trash' />
              모든 알림 삭제하기
            </S.DeleteNotifi>
          </Flex.FlexVertical>
        </S.NotifiHeader>
        {filteredAlarmList.length === 0 ? (
          <NoNotify />
        ) : (
          <>
            {filteredAlarmList && (
              <S.Notifications>
                {filteredAlarmList.reverse().map((data, index) => (
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
          </>
        )}
      </S.Container>
    </>
  );
}

export default Notify;
