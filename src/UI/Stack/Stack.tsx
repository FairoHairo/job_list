import { FC, ReactElement } from "react"
import './index.less'

export type StackProps = {
  children: ReactElement | ReactElement[];
  pos?: 'center' | 'space-between' | 'left' | 'right'
}

const Stack: FC<StackProps> = ({ pos= 'center', children, ...props }) => {
  const classNames = `stack flex--${pos}`

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

export { Stack }