import { FilterPanel } from "./Components/FilterPanel/FilterPanel"
import { Header } from "./Components/Header/Header"

export const App = () => (
  <>
    <Header />
    <div className="container">
      <FilterPanel />
    </div>
  </>
)