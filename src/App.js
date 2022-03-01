import { Provider } from "react-redux";
import { store } from "./modules/store/store";
import { AppRouter } from "./router/AppRouter";
import "./App.css";
import "animate.css";

function App() {
  let develop = process.env.REACT_APP_VERSION_STATE;
  develop = develop === "1";
  console.log(process.env.REACT_APP_VERSION);
  return (
    <>
      {develop && (
        <div className="fixed z-50 bg-blue-100 top-0 left-0">
          {process.env.REACT_APP_VERSION}
        </div>
      )}
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
