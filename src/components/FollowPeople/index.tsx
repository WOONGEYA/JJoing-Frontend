import { IFollower } from 'type/IFollower';
import * as S from './style';

const FollowPeople = (data: IFollower) => {
  return <S.Container>{data.name}</S.Container>;
};

export default FollowPeople;
