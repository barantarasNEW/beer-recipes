import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router";

const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const Test = lazy(() => import("./pages/Test/Test"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
