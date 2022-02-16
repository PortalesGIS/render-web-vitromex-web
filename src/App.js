import { Provider } from "react-redux";
import { store } from "./modules/store/store";
import { AppRouter } from "./router/AppRouter";
import "./App.css";

function App() {
  console.log("v0.8.0");
  return (
    <>
      <div className="fixed z-50 bg-blue-100 bottom-0 right-0">v0.8.0</div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
