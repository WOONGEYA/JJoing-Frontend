import { ICreateBoard } from 'type/ICreateBoard';
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
