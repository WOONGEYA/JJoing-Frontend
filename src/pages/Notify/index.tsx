import { useEffect, useState } from 'react';
import * as S from './style';
import * as Flex from 'styles/flex';
import NoNotify from 'components/NoNotify/index';
import Search from 'components/Search';
import instance from 'apis/httpClient';
import NotifyBox, { NotifyBoxProps } from 'components/NotifyBox';
import { NewProject } from 'pages/Explore';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteNotification, getNotification } from 'apis';
import { Notification } from 'contents/queryKey';
import Layout from 'components/Layout';
import DeleteIcon from 'assets/DeleteIcon';

function Notify() {
  const [userInput, setUserInput] = useState<string>('');
  const [alarmList, setAlarmList] = useState<NotifyBoxProps[]>([]);
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
    onSuccess: (data) => {
      setAlarmList(data);
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
              <DeleteIcon width={16} height={16} />
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
                {filteredAlarmList.reverse().map((data) => (
                  <NotifyBox key={data.id} {...data} />
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
