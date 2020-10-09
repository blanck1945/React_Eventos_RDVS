import { toast } from "react-toastify";

interface ToastResponse {
  state: boolean;
  toast: string;
  msg: string;
}

export const callToast = (value: ToastResponse) => {
  switch (value.toast) {
    case "noUser":
      return toast.error(value.msg, {
        position: "bottom-left",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
      });
    case "noAdd":
      return toast.info(value.msg, {
        position: "bottom-left",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
      });
    case "add":
      return toast.success(value.msg, {
        position: "bottom-left",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
      });
    case "delete":
      return toast.error(value.msg, {
        position: "bottom-left",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
      });
  }
};
