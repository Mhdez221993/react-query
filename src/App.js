import "./App.css";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { HomePage } from "./components/Home.page";
import { RQSSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { RQSuperHeroPage } from "./components/RQSuperHero.page";
import { ReactQueryDevtools } from "react-query/devtools";
import { SuperHeroesPage } from "./components/SuperHeroes.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>

              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSSuperHeroesPage />} />
            <Route
              path="/rq-super-heroes/:heroId"
              element={<RQSuperHeroPage />}
            />
          </Routes>
        </div>
      </Router>

      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
