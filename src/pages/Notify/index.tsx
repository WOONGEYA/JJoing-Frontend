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
import { useRecoilState } from 'recoil';
import { alaram } from 'apis/recoil';

interface alarmList {
  id: number;
  title: string;
  content: string;
}

function Notify() {
  const [userInput, setUserInput] = useState<string>('');
  const [alarmList, setAlarmList] = useState<alarmList[]>([]);
  const [useAlaram, setUseAlaram] = useRecoilState(alaram);

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

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await instance.get('/notification');
        setAlarmList(data);
        console.log('alarm', data);
      } catch (error) {
        console.log('에러');
      }
    };
    fetchData();
  }, []);

  setUseAlaram(alarmList.length);
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
