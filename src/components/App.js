
import React,{useState,useEffect} from "react";
import './../styles/App.css';

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Time Spent on Page: {seconds} seconds</h1>
    </div>
  );
}

export default App
