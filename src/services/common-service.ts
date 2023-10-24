import { IframeMessageProxy } from "iframe-message-proxy";

import IMP from "@/constants/iframe-message-proxy";

interface ShowToastProps {
  type: string;
  message: string;
  title?: string;
  duration?: number;
}

const startLoading = () =>
  IframeMessageProxy.sendMessage({
    action: IMP.ACTIONS.START_LOADING,
  });

const stopLoading = () =>
  IframeMessageProxy.sendMessage({
    action: IMP.ACTIONS.STOP_LOADING,
  });

const setHeight = (height: number): void => {
  IframeMessageProxy.sendMessage({
    action: IMP.ACTIONS.HEIGHT_CHANGE,
    content: height,
  });
};

const showToast = (toast: ShowToastProps): void => {
  IframeMessageProxy.sendMessage({
    action: IMP.ACTIONS.TOAST,
    content: toast,
  });
};

const showModal = (
  title: string,
  body: string,
  confirm = "ok",
  cancel = "cancel",
) =>
  IframeMessageProxy.sendMessage({
    action: IMP.ACTIONS.SHOW_MODAL,
    content: {
      title,
      body,
      confirm,
      cancel,
    },
  });

const withLoadingAsync = async (func: () => void): Promise<void> => {
  startLoading();
  try {
    return await func();
  } finally {
    stopLoading();
  }
};

export {
  setHeight,
  showModal,
  showToast,
  startLoading,
  stopLoading,
  withLoadingAsync,
};
