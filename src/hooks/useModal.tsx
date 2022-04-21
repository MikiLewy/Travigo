import { useReducer, useState } from 'react';

const initialValue = {
  title: '',
  isInfo: false,
  hasForm: false,
  isEditing: false,
  show: false,
};

const reducers = {
  CREATING: 'CREATING',
  EDITING: 'EDITING',
  INFO: 'INFO',
};

const modalReducer = (state: any, action: any) => {
  switch (action.type) {
    case reducers.CREATING:
      return {
        title: 'Create a new event',
        isInfo: false,
        hasForm: true,
        isEditing: false,
        show: true,
      };
    case reducers.EDITING:
      return {
        title: 'Edit an existing event',
        isInfo: false,
        hasForm: true,
        isEditing: true,
        show: true,
      };
    case reducers.INFO:
      return {
        title: '',
        isInfo: true,
        hasForm: false,
        isEditing: false,
        show: true,
      };
  }
};

export const useModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [modalState, modalDispatch] = useReducer(modalReducer, initialValue);

  const dispatchModalAction = (action: string) => {
    modalDispatch({
      type: action,
    });
    setOpen(true);
  };
  return {
    open,
    setOpen,
    modalState,
    dispatchModalAction,
    reducers,
  };
};
