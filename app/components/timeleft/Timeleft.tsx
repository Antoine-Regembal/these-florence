import { useEffect, useState } from "react";

const calculateTimeLeft = () =>
  new Date(new Date(1734633000000).getTime() - new Date().getTime());
export const Timeleft = () => {
  const [timeleft, setTimeleft] = useState(() => calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeleft(() => calculateTimeLeft());
    });
    return () => clearInterval(interval);
  }, []);

  const computedTimeLeft = `${timeleft.getMonth()} Mois : ${timeleft.getDay()} Jours : ${timeleft.getHours()} Heures : ${timeleft.getMinutes()} Minutes : ${timeleft.getSeconds()} Secondes`;

  return <div>{computedTimeLeft}</div>;
};
