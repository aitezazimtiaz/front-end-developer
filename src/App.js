import primaryDots from "./assets/primary_dots.svg";
import secondaryDots from "./assets/secondary_dots.svg";

import HourHand from "./assets/hour_hand.svg";
import MinutesHand from "./assets/minutes_hand.svg";
import SecondsHand from "./assets/seconds_hand.svg";
import { useEffect, useState } from "react";

function App() {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    // We set time interval to update the clock state and time
    const TimeInterval = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => clearInterval(TimeInterval);
  }, []);

  // hours 12 format
  const hours = clock.getHours() % 12;
  const seconds = clock.getSeconds();
  const minutes = clock.getMinutes();
  console.log(hours);

  // clock is 360 deg which is 360/60=6 means 6 degree required by minutes and seconds hand to rotate 360

  const hoursRotation = (hours + (minutes / 60 + seconds / 3600)) * 30;

  const minutesRotation = minutes * 6;

  const secondsRotation = seconds * 6;

  return (
    <div className="App">
      <div className="h-screen justify-center items-center flex">
        {/* Analog Clock */}
        <div className="rounded-full h-[300px] w-[300px]  shadow-lg relative">
          <img
            src={primaryDots}
            className="w-full h-full absolute"
            alt="primary_dots"
          />
          <img
            src={secondaryDots}
            className="w-full h-full absolute"
            alt="secondary_dots"
          />
          <div className="h-full w-full flex justify-center items-center ">
            <img
              src={HourHand}
              className="w-[250px] h-[100px] absolute transform -translate-x-3/2 -translate-y-3/2"
              alt="hour_hand"
              style={{ transform: `rotate(${hoursRotation}deg)` }}
            />
            <img
              src={MinutesHand}
              className=" w-[250px] h-[100px] absolute transform -translate-x-3/2 -translate-y-1/2"
              alt="minutess_hand "
              style={{ transform: `rotate(${minutesRotation}deg)` }}
            />

            <img
              src={SecondsHand}
              className={`w-[250px] h-[100px] absolute transform   -translate-x-3/2 -translate-y-1/2`}
              alt="seconds_hand"
              style={{ transform: `rotate(${secondsRotation}deg)` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
