import { useCallback } from "react";

export default function useBodyScrollLock() {
  // 모달이 열렸을 때 스크롤을 막는다
  const lockScroll = useCallback(() => {
    const scrollY =
      document.documentElement.style.getPropertyValue("--scroll-y");
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}`;
  }, []);

  // 모달이 닫혔을 때 스크롤을 활성화 한다.
  const openScroll = useCallback(() => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  }, []);

  return { lockScroll, openScroll };
}
