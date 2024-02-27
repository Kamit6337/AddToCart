"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserConnectionProvider = ({ children }) => {
  const router = useRouter();
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleNetwork = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleNetwork);
    window.addEventListener("offline", handleNetwork);

    return () => {
      window.removeEventListener("online", handleNetwork);
      window.removeEventListener("offline", handleNetwork);
    };
  }, []);

  useEffect(() => {
    if (!isOnline) {
      router.push(`/error?msg=NetworkConnectionFail`);
    } else {
      router.push("/");
    }
  }, [router, isOnline]);

  return children;
};

export default UserConnectionProvider;
