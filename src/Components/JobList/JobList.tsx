import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addFilter } from "../../store/filters/filters-actions"
import { selectAllPositions } from "../../store/positions/position-selectors"
import JobPosition from "./JobPosition"

interface JobPositionProps {
  props?:any
}

const JobList: FC<JobPositionProps> = (props) => {
  const positions = useSelector(selectAllPositions)
  const dispatch = useDispatch()

  const onAddFilter = (filter: string) => {
    dispatch(addFilter(filter))
  } 

  useEffect(() => {
    console.log(3)
  }, [])

  return (
    <div className="job-list__container">
      <ul className="job-list">
        {positions.map((item, i) => (
          <JobPosition
            key={`${item.id || 404}_${i}`}
            onAddFilter={onAddFilter}
            {...item}
          />
        ))}
      </ul>
    </div>
  )
}

export default JobList