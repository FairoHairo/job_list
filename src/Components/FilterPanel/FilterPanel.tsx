import { Card, Stack, Badge } from "../../UI"
import './index.less'

const FilterPanel = () => {
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          <Badge variant="clearable">Frontend</Badge>
          <Badge variant="clearable">Backend</Badge>
          <Badge variant="clearable">React</Badge>
        </Stack>

        <button className='link'>Clear</button>
      </div>
    </Card>
  )
}

export { FilterPanel }