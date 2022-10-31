import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { FilterPanel } from "./Components/FilterPanel/FilterPanel"
import { Header } from "./Components/Header/Header"
import { JobList } from "./Components/JobList"

import addPositions from "./store/positions"
import data from './mock/data.json'

export const App = () => {
  const dispath = useDispatch()

  useEffect(() => {
    console.log(2)
    dispath(addPositions(data))

    return () => console.log('2.2')
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <FilterPanel />
        <div className="divider"></div>
        <JobList />
      </div>
    </>
  )
}