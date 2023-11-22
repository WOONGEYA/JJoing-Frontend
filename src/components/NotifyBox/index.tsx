import React from 'react';
import instance from 'apis/httpClient';
import { useQuery } from 'react-query';
import NotifyPerson from 'components/NotifyPerson';

export interface User {
  id: number;
  introduce: string;
  userName: string;
  position: string;
  phone: string;
  school: string;
  userImg: string;
  userId: number;
}

export interface NotifyBoxProps {
  id: number;
  title: string;
  content: string;
  projectId: number;
  userId: number;
}

function NotifyBox({ id, title, content, projectId, userId }: NotifyBoxProps) {
  const [userData, setUserData] = React.useState<User[]>([]);

  const isUser = async (id: number) => {
    const { data } = await instance.get(`/application/project/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return data;
  };

  useQuery(['isUser', projectId], () => isUser(projectId), {
    onSuccess: (data) => {
      setUserData(data);
    },
  });

  return (
    <>
      <NotifyPerson
        id={id}
        title={title}
        content={content}
        projectId={projectId}
        userId={userId}
      />
    </>
  );
}

export default NotifyBox;
