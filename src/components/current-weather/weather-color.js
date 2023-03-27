// import React, { useState, useEffect } from "react";
// import { WEATHER_API_URL } from "../../api";
// import CurrentWeather from "./current-weather";

// const WeatherColor = () => {
//   const [color, setColor] = useState("");

//   useEffect(() => {
//     const weather = WEATHER_API_URL; // replace with API call to get current weather
//     let palette;
//     if (weather === "sunny") {
//       palette = ["#FFA500", "#FFDAB9", "#FFF8DC"];
//     } else if (weather === "cloudy") {
//       palette = ["#A9A9A9", "#D3D3D3", "#F0F8FF"];
//     } else if (weather === "rainy") {
//       palette = ["#6495ED", "#87CEFA", "#ADD8E6"];
//     } else {
//       palette = ["#FFFFFF", "#FFFFFF", "#FFFFFF"];
//     }
//     const randomColor = palette[Math.floor(Math.random() * palette.length)];
//     setColor(randomColor);
//   }, []);

//   return (
//     <CurrentWeather color={color} />
//   );
// };

// export default WeatherColor;
