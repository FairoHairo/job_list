import { FC } from "react"
import { Badge, Stack } from "../../UI"

interface JobListProps {
  role?: string;
  level?: string;
  languages?: string[];
  tools?: string[];
  logo?: string;
  company?: string;
  new?: boolean;
  featured?: boolean;
  position?: string;
  postedAt?: string;
  contract?: string;
  location?: string;
}

const JobPosiotion:FC<JobListProps> = ({
  languages = [],
  level,
  role,
  tools = [],
  logo,
  company,
  new: isNew,
  featured,
  position,
  contract,
  location,
  postedAt,
  ...props }) => {
  const badges = [role, level, ...tools, ...languages]

  return (
    <li className="job-list__item">
      <div className="job-info">
        <img src={logo} alt={company} className="job-info__avatar" />
        <div className="job-info__body">
          <div className="job-info__company">
            <h3>{company}</h3>
            {(isNew || featured) && (
              <Stack>
                {isNew && (
                  <Badge variant="rounded" colorScheme="primary">
                      NEW!
                  </Badge>
                )}
                {featured && (
                  <Badge variant="rounded" colorScheme="dark">
                      FEATURED
                  </Badge>
                )}
              </Stack>
            )}
          </div>
          <h2 className='job-info__position'>
            {position}
          </h2>
          <Stack pos="space-between">
            <div className='job-position-meta'>
              {postedAt}
            </div>
            <div className='job-position-meta'>
              {contract}
            </div>
            <div className='job-position-meta'>
              {location}
            </div>
          </Stack>
        </div>
      </div>
      <Stack>
        {badges.length && badges.map((item, i) => {
          return <Badge key={`${item}_${i}`}>{item}</Badge>
        })}
      </Stack>
    </li>
  )
}

export default JobPosiotion