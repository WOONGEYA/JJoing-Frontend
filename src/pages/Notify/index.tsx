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
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteNoti, getNoti } from 'apis';
import { Notification } from 'contents/queryKey';
import Layout from 'components/Layout';

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

  const queryClient = useQueryClient();

  const deleteNotification = useMutation({
    mutationKey: [Notification],
    mutationFn: () => deleteNoti(),
    onSuccess: () => {
      queryClient.invalidateQueries([Notification]);
    },
  });

  const getNotification = useQuery({
    queryKey: [Notification],
    queryFn: () => getNoti(),
    onSuccess: (data) => {
      setAlarmList(data);
      setNewArrs(data);
    },
  });

  const handleDeleteAll = () => {
    deleteNotification.mutate();
  };

  const filteredAlarmList = alarmList.filter((alarm) =>
    newArrs.includes(alarm.projectId),
  );

  useEffect(() => {
    instance.get('/project').then((res) => {
      const ids = res.data.map((el: NewProject) => el.id);
      setNewArrs(ids);
    });
  }, []);

  return (
    <Layout>
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
    </Layout>
  );
}

export default Notify;
