import { useDispatch, useSelector } from "react-redux"
import { clearFilters, removeFilter } from "../../store/filters/filters-actions"
import { selectFilters } from "../../store/filters/filters-selectors"
import { Card, Stack, Badge } from "../../UI"
import './index.less'
const TEN_MILL = 10000000


const FilterPanel = () => {
  const dispatch = useDispatch()
  const filters = useSelector(selectFilters)

  const random = () => Math.random() * TEN_MILL

  const onRemove = (filter: string) => {
    dispatch(removeFilter(filter))
  }

  const onALLClear = () => dispatch(clearFilters())

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map((item, id) => (
            <Badge onClear={() => onRemove(item)} key={`${random()}_id:${id}`} variant="clearable">{item}</Badge>
          ))}
        </Stack>

        <button className='link' onClick={onALLClear}>Clear</button>
      </div>
    </Card>
  )
}

export { FilterPanel }