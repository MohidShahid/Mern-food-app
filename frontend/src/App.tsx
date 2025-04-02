import "./App.css";
import { Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <span>Home</span>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
