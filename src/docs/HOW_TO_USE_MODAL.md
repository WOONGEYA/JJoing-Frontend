### 모달 사용하는 법

1. 진행중인 페이지에 hooks import하기

```tsx
// 진행중인 페이지에 hooks import하기
import useModal from 'hooks/useModal';

const ProcessPage = () => {
  return (
    <div>
      <h1>HELLO</h1>
      <button>VIEW MODAL</button>
    </div>
  );
};

export default ProcessPage;
```

2. import한 hooks에서 구조분해할당으로 openModal 속성 땡겨오기

```tsx
import useModal from 'hooks/useModal';

const ProcessPage = () => {
  // import한 hooks에서 구조분해할당으로 openModal 속성 땡겨오기
  const { openModal } = useModal();

  return (
    <div>
      <h1>HELLO</h1>
      <button>VIEW MODAL</button>
    </div>
  );
};

export default ProcessPage;
```

3. 클릭하면 모달을 띄우는 함수 만들어주기, openModal의 컴포넌트 속성에는 개인이 만들어둔 모달이 들어가야함, 그리고 onClick에 추가

```tsx
import useModal from 'hooks/useModal';
import ProfileUpdateModal from 'components/ProfileUpdateModal';

const ProcessPage = () => {
  const { openModal } = useModal();

  // 클릭하면 모달을 띄우는 함수 만들어주기
  const handleOpenModalButtonClick = () => {
    openModal({
      // openModal의 컴포넌트 속성에는 개인이 만들어둔 모달이 들어가야함
      component: <ProfileUpdateModal />,
    });
  };

  return (
    <div>
      <h1>HELLO</h1>
      {/** 그리고 onClick에 추가 */}
      <button onClick={handleOpenModalButtonClick}>VIEW MODAL</button>
    </div>
  );
};

export default ProcessPage;
```

굳 모르는거있으면 질문!
component에는 퍼블리싱해주신 모달 컴포넌트 넣어주시면 잘 작동합니다!
