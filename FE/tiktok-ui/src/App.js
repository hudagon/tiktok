import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout";
import { Fragment } from "react";

function App() {

  return (

    <Router>
      <div className="app">

        <Routes>
          {publicRoutes.map((x, index) => {
            const Page = x.component;

            let Layout = DefaultLayout;

            if (x.layout) {
              Layout = x.layout;
            } else if (x.layout === null) {
              Layout = Fragment;
            }

            return <Route key={index} path={x.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              } />
          })}
        </Routes>

      </div>
    </Router>
  );
}

export default App;
