"use client";

import { useEffect, useRef } from "react";

export default function useWindowListener(
  eventType: string,
  listener: EventListener,
) {
  const initialListener = useRef({ eventType, listener });

  useEffect(() => {
    const { eventType, listener } = initialListener.current;
    window.addEventListener(eventType, listener);
    return () => window.removeEventListener(eventType, listener);
  }, []);
}
