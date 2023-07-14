import { Provider } from "react-redux";
import { store } from "./modules/store/store";
import { AppRouter } from "./router/AppRouter";
import "./App.css";
import "animate.css";
import ReactGA from 'react-ga4';
const TRACKING_ID = "G-TV0VL0E0DP"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
function App() {
  
  console.log(process.env.REACT_APP_VERSION);
  return (
    <>
      {/* <div className="fixed z-50 bg-blue-100 top-0 left-0">
        {process.env.REACT_APP_VERSION}
      </div> */}
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
