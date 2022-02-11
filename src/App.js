import { AppRouter } from "./router/AppRouter";
import "./App.css";

function App() {
  console.log('v0.3.0')
  return (
    <>
    <div className="absolute z-50 bg-blue-100 bottom-0 right-0">
      v0.3.0
    </div>
      <AppRouter />
    </>
  );
}

export default App;
