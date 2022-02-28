import { Provider } from "react-redux";
import { store } from "./modules/store/store";
import { AppRouter } from "./router/AppRouter";
import "./App.css";
import 'animate.css';

function App() {
  console.log("v0.40.2");
  return (
    <>
      <div className="fixed z-50 bg-blue-100 top-0 left-0">v0.40.2</div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
