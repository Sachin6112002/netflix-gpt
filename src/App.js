import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";

function App() {
  return < Provider store={appStore}>
  <Body/>
  {console.log(appStore.getState())}
  </Provider>;
}
export default App;
