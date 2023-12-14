import { useState } from "react";
import NavigationBar from "./components/ui-navigation-bar/NavigationBar";
import ServiceNavigationBar from "./components/ui-navigation-bar/ServiceNavigationBar";

function App() {
  const [user, setUser] = useState([]);

  return (
    <>
      <NavigationBar />
      <ServiceNavigationBar />
    </>
  );
}

export default App;
