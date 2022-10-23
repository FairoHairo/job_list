import { FC, ReactNode } from "react"
import RemoveIcon from "../Icons/RemoveIcon"
import './index.less'

export type BadgeProps = {
  variant?: 'basic' | 'clearable' | 'rounded';
  colorScheme?: 'light' | 'primary' | 'dark';
  children: ReactNode;
  onClear?: (e: any) => void;
  onClick?: (e: any) => void;
}
const Badge: FC<BadgeProps> = ({
  variant = 'basic',
  colorScheme = 'light',
  onClear,
  onClick,
  children,
  ...props
}) => {
  const classNames = `badge badge--${variant} badge--${colorScheme}`

  const clearRender = () => {
    if (variant !== 'clearable') return null

    return (
      <div className="badge-remover" onClick={onClear}>
        <RemoveIcon />
      </div>
    )
  }

  return (
    <div className={classNames} onClick={onClick}>
      <span>
        {children}
      </span>
      {clearRender()}
    </div>
  )
}

export { Badge }