import { ICreateBoard } from 'type/ICreateBoard';
import instance from './httpClient';
import { useState } from 'react';

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

  console.log('data.postResponses', data.postResponses);
  return { data: data.postResponses, nextPage: page + 1 };
};
