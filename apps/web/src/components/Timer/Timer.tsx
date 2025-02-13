import { useEffect, useState } from "react";
import styled from "styled-components";

interface CountdownTimerProps {
  targetDate: string; // Format: "YYYY-MM-DDTHH:mm:ss"
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <TimerWrapper>
      <TimeBox>
        <span>{timeLeft.days}</span>
        <Label>Days</Label>
      </TimeBox>
      <Separator>:</Separator>
      <TimeBox>
        <span>{timeLeft.hours}</span>
        <Label>Hours</Label>
      </TimeBox>
      <Separator>:</Separator>
      <TimeBox>
        <span>{timeLeft.minutes}</span>
        <Label>Minutes</Label>
      </TimeBox>
      <Separator>:</Separator>
      <TimeBox>
        <span>{timeLeft.seconds}</span>
        <Label>Seconds</Label>
      </TimeBox>
    </TimerWrapper>
  );
};

export const TimerWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

export const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #444;
  padding: 2px;
  border-radius: 8px;
  min-width: 60px;
  text-align: center;
`;

export const Label = styled.span`
  font-size: 9px;
  line-height: 12px;
  color: #bbb;
`;

export const Separator = styled.span`
  margin: 0 10px;
  font-size: 13px;
  line-height: 13px;

  color: #fff;
`;

export default CountdownTimer;
