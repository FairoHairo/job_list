import { FC, ReactElement } from "react"
import './index.less'

export type CardProps = {
  className?: string;
  isFeature?: boolean;
  children: ReactElement;
}
const Card: FC<CardProps> = ({ isFeature, className = '', children, ...props }) => {
  const classNames = `card ${isFeature ? 'card--feature' : ''} ${className}`

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

export { Card }