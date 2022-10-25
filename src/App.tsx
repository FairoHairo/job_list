import { FilterPanel } from "./Components/FilterPanel/FilterPanel"
import { Header } from "./Components/Header/Header"
import { JobList } from "./Components/JobList"

export const App = () => (
  <>
    <Header />
    <div className="container">
      <FilterPanel />
      <div className="divider"></div>
      <JobList />
    </div>
  </>
)