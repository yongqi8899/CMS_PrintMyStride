import { toast } from 'react-toastify'; // Assuming you're using react-toastify
import { useEffect } from "react";

export const useToaster = () => {
  const handleEvent = (e) => {
    const { msg, status } = e.detail;
    if (status === 'success') {
      toast(msg);
    } else {
      toast.error(msg);
    }
  };

  useEffect(() => {
    document.addEventListener('myToaster', handleEvent);
    return () => document.removeEventListener('myToaster', handleEvent);
  }, []);
};

export const showToast = (res, errorMsg, successMsg) => {
  if (!res.ok) {
    const event = new CustomEvent("myToaster", {
      detail: { status: "error", msg: errorMsg },
    });
    document.dispatchEvent(event);
  } else {
    const event = new CustomEvent("myToaster", {
      detail: { status: "success", msg: successMsg },
    });
    document.dispatchEvent(event);
  }
};
