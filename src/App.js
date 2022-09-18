import "./App.css";

export default function App() {
  let weatherData = {
    city: "Odesa",
    date: "Monday 05:00",
    description: "Clear",
    humidity: 80,
    wind: 10,
    temperature: 20,
    imgUrl: "https://main--heroic-dieffenbachia-43b57a.netlify.app/img/sun.png",
  };
  return (
    <div className="App">
      <form className="mb-3">
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="btn btn-light button"
            />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-8">
          <h1>{weatherData.city}</h1>
        </div>
        <div className="col-4 temp-value">
          <span className="temp">{weatherData.temperature}</span>
          <span className="units"> °C </span>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <ul className="day-time">
            <li>
              Last updated:
              <div>{weatherData.date}</div>
            </li>
            <li className="description">{weatherData.description}</li>
          </ul>

          <ul className="humid-wind">
            <li>
              <img
                className="humid-icon"
                src="https://main--heroic-dieffenbachia-43b57a.netlify.app/img/humid.png"
                alt=""
                width="13px"
              />
              <span>{weatherData.humidity}</span>%
            </li>
            <li>
              <img
                className="wind-icon"
                src="https://main--heroic-dieffenbachia-43b57a.netlify.app/img/wind.png"
                alt=""
                width="15px"
              />
              <span>{weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>

        <div className="col-6">
          <img className="weather-icon" src={weatherData.imgUrl} alt="sun" />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
