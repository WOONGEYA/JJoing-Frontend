import { useEffect, useState } from 'react';
import * as S from './style';
import * as Flex from 'styles/flex';
import trash from 'assets/trash.svg';
import NoNotify from 'components/NoNotify/index';
import Search from 'components/Search';
import instance from 'apis/httpClient';
import NotifyBox from 'components/NotifyBox';
import { NewProject } from 'pages/Explore';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteNotification, getNotification } from 'apis';
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

  const { mutate } = useMutation({
    mutationKey: [Notification],
    mutationFn: () => deleteNotification(),
    onSuccess: () => {
      queryClient.invalidateQueries([Notification]);
    },
  });

  useQuery({
    queryKey: [Notification],
    queryFn: () => getNotification(),
    onSuccess: async (data) => {
      await setAlarmList(data);
      setNewArrs(data);
    },
  });

  const handleDeleteAll = () => {
    mutate();
  };

  const filteredAlarmList = alarmList.filter((alarm) =>
    newArrs.includes(alarm.projectId),
  );

  useEffect(() => {
    if (alarmList.length > 0) {
      instance.get('/project').then((res) => {
        const ids = res.data.map((el: NewProject) => el.id);
        setNewArrs(ids);
      });
    }
  }, [alarmList]);

  return (
    <Layout>
      <S.Container>
        <S.NotificationHeader>
          <Search value={userInput} onChange={setUserInput} />
          <Flex.FlexVertical style={{ gap: '12px' }}>
            <S.NotificationAmount>
              {filteredAlarmList.length} / 100
            </S.NotificationAmount>
            <S.DeleteNotification onClick={handleDeleteAll}>
              <S.Icon src={trash} alt='Trash' />
              모든 알림 삭제하기
            </S.DeleteNotification>
          </Flex.FlexVertical>
        </S.NotificationHeader>
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
