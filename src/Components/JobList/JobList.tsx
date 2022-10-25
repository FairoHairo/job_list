import { FC } from "react"
import JobPosition from "./JobPosition"

interface JobPositionProps {
  a?:any
}

const JobList: FC<JobPositionProps> = (props) => {
  const test = [{
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"]
  }]

  return (
    <div className="job-list__container">
      <ul className="job__list">
        {test.map((item, i) => <JobPosition key={`${item.id || 404}_${i}`} {...item} />)}
      </ul>
    </div>
  )
}

export default JobList