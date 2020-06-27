export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_ClOSE = 'MODAL_CLOSE';

export const openModal = (modalType, modalProps) => {
  return {
    type: MODAL_OPEN,
    payload: {
      modalType,
      modalProps,
    },
  };
};

export const closeModal = () => {
  return {
    type: MODAL_ClOSE,
  };
};
