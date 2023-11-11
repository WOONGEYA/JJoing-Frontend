import * as S from './style';

const LoadingPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <S.Loader />
    </div>
  );
};

export default LoadingPage;
