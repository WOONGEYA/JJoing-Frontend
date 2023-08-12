import React from 'react';
import { useRecoilState } from 'recoil';
import modalStore from 'store/modal.store';
import IModalState from 'types/IModalState.type';

const useModal = () => {
  const [modal, setModal] = useRecoilState(modalStore);

  const openModal = React.useCallback(
    (modalData: IModalState) => {
      setModal({
        ...modalData,
        visible: true,
      });
    },
    [setModal],
  );

  const closeModal = React.useCallback(() => {
    setModal({
      component: null,
      visible: false,
    });
  }, [setModal]);

  return { openModal, closeModal, visible: !!modal.visible };
};

export default useModal;
