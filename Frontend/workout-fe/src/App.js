import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import MainLayout from "./components/Layouts/MainLayout";
import Home from "./components/pages/Home";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />}/>
  </Route>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
