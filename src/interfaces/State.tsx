export interface State {
  auth: {
    token: string;
    isAuth: boolean;
    userId: string;
    userName: string;
  };
  modal: {
    isOpen: boolean;
    title: string;
    isInfo: boolean;
    isEditing: boolean;
    isError: boolean;
  };
}
