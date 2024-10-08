import {ToastContainer } from "react-toastify";
import DashboardView from "./component/dashboard";
import "react-toastify/dist/ReactToastify.css";


function App () {
  return (
    <div className="bg-slate-800 min-w-screen p-10  min-h-screen flex justify-center items-center flex-nowrap">
      <ToastContainer />
      <DashboardView />
    </div>
  );
}

export default App;
