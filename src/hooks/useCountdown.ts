import { useEffect, useState } from 'react';
import type { TimeLeft } from '@/types/components';

export const getTimeLeft = (): TimeLeft => {
  const now = new Date();
  const target = new Date();
  target.setHours(23, 59, 59, 999);
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return { hours: '00', minutes: '00', seconds: '00' };
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const formatValue = (value: number) => value.toString().padStart(2, '0');

  return {
    hours: formatValue(hours),
    minutes: formatValue(minutes),
    seconds: formatValue(seconds),
  };
};

const ZERO_STATE: TimeLeft = { hours: '00', minutes: '00', seconds: '00' };

export function useCountdown(intervalMs = 1000) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(ZERO_STATE);

  useEffect(() => {
    setTimeLeft(getTimeLeft());

    const timer = setInterval(() => setTimeLeft(getTimeLeft()), intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs]);

  return timeLeft;
}
