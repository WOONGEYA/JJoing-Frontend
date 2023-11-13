import { ICreateBoard } from 'types/ICreateBoard';
import instance from './httpClient';

export const followList = async (id: number) => {
  const { data } = await instance.get(`follow/${id}/follower`);
  return data;
};

export const followingList = async (id: number) => {
  const { data } = await instance.get(`follow/${id}/following`);
  return data;
};

export const userInfo = async (id: number) => {
  const { data } = await instance.get(`/user/${id}`);
  return data;
};

export const createBoard = async ({ title, content, imgUrl }: ICreateBoard) => {
  const { data } = await instance.post('/post', { title, content, imgUrl });
  return data;
};

export const putBoard = async ({
  title,
  content,
  imgUrl,
  id,
}: ICreateBoard) => {
  const { data } = await instance.put(`/post/${id}`, {
    title,
    content,
    imgUrl,
  });
  return data;
};

export const getBoardList = async () => {
  const { data } = await instance.get('/post');
  return data;
};

export const fetchBoards = async (page = 1) => {
  const { data } = await instance.get(`/post?page=${page}`, {
    params: {
      limit: 10,
      page,
    },
  });

  return { data: data.postResponses, nextPage: page + 1 };
};

export const getProjectDetail = async (id: number) => {
  const { data } = await instance.get(`/project/${id}`);
  return data;
};

export const getProjectMember = async (id: number) => {
  const { data } = await instance.get(`/project/member/${id}`);
  return data;
};

export const getisLiked = async (id: number) => {
  const { data } = await instance.get(`/like/check/${id}/project`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });

  return data;
};

export const deleteHeart = async (id: number) => {
  const { data } = await instance.delete(`/like/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });

  return data;
};

export const deleteProjectDetail = async (id: number) => {
  const { data } = await instance.delete(`/project/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });

  return data;
};

export const addProjectDetail = async (id: number) => {
  const { data } = await instance.post(`/like/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });

  return data;
};

export const deleteNoti = async () => {
  const { data } = await instance.delete('/notification');
  return data;
};

export const getNoti = async () => {
  const { data } = await instance.get('/notification');
  return data;
};

export const getBoardProject = async (id: number) => {
  const { data } = await instance.get(`/post/${id}`);
  return data;
};

export const deleteBoardProject = async (id: number) => {
  const { data } = await instance.delete(`/post/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return data;
};
