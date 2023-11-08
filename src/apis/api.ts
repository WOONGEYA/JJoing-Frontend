import instance from './httpClient';

export const followList = async (id: number) => {
  const { data } = await instance.get(`follow/${id}/follower`);
  return data;
};

export const userInfo = async (id: number) => {
  const { data } = await instance.get(`/user/${id}`);
  return data;
};
