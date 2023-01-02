import "./App.css";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { DependentQueriesPage } from "./components/DependentQueries.pages";
import { DinamicParallePage } from "./components/DinamicParallel.page";
import { HomePage } from "./components/Home.page";
import { ParallelQueries } from "./components/ParallelQueries.Page";
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
            <Route
              path="/rq-dependent"
              element={<DependentQueriesPage email="doe@gmail.com" />}
            />
            <Route
              path="/rq-dynamic-parallel"
              element={<DinamicParallePage heroIds={[1, 3]} />}
            />
            <Route path="/rq-parallel" element={<ParallelQueries />} />
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSSuperHeroesPage />} />
            <Route
              path="/rq-super-heroes/:heroId"
              element={<RQSuperHeroPage />}
            />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>

      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
