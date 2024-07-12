import { ToastOptions, toast } from "react-hot-toast";
import { ToastAlert } from "../components/ToastAlert";

const toastConfig: ToastOptions = {
  position: "top-left",
};

const Success = (message: any) => {
  return toast.custom(
    (hotToast) => (
      <ToastAlert loading={false} hotToast={hotToast} message={message} status="success" />
    ),
    {
      ...toastConfig,
      duration: 10000,
    }
  );
};
const Error = (message: any) => {
  return toast.custom(
    (hotToast) => (
      <ToastAlert loading={false} hotToast={hotToast} message={message} status="error" />
    ),
    {
      ...toastConfig,
      duration: 10000,
    }
  );
};
const Warn = (message: any) => {
  return toast.custom(
    (hotToast) => (
      <ToastAlert loading={false} hotToast={hotToast} message={message} status="warn" />
    ),
    {
      ...toastConfig,
      duration: 10000,
    }
  );
};
const Primary = (message: any) => {
  return toast.custom(
    (hotToast) => (
      <ToastAlert loading={false} hotToast={hotToast} message={message} status="default" />
    ),
    {
      ...toastConfig,
      duration: 10000,
    }
  );
};
const Loading = (message: any) => {
  return toast.custom(
    (hotToast) => (
      <>
        <ToastAlert loading={true} hotToast={hotToast} message={message} status="default" />
      </>
    ),
    {
      ...toastConfig,
      duration: Infinity,
    }
  );
};
const Dismiss = (id: string) => {
  return toast.dismiss(id);
};
const Notify = {
  success: Success,
  error: Error,
  primary: Primary,
  loading: Loading,
  dismiss: Dismiss,
  warn: Warn,
};

export default Notify;
