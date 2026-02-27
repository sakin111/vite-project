import { Outlet } from "react-router";
import Common from "./components/Layout/Common";


const App = () => {
  return (
    <div>
      <Common>
        <Outlet />
      </Common>
    </div>
  );
};

export default App;
