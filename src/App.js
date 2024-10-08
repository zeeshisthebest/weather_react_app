import { toast, ToastContainer } from "react-toastify";
import DashboardView from "./component/dashboard";
import { getCurrentWeather } from "./services/currentWeatherService";
import { getLocationFromIp } from "./services/ipLocationService";
import "react-toastify/dist/ReactToastify.css";

const getWeather = async ()=>{
  try {
    let location =  await getLocationFromIp();
    let weather = await getCurrentWeather("location");
    console.log(weather);

    if (weather.status === 1006){
      toast.error("Invalid Location")
    }
  } catch (error) {
    toast.error("Failed to get data from server");
  }

}

function App () {
  return (
    <div className="bg-slate-800 min-w-screen p-10  min-h-screen flex justify-center items-center flex-nowrap">
      <ToastContainer />
      <DashboardView />
    </div>
  );
}

export default App;
