import { ReactNode } from 'react'
import classNames from 'classnames'

const BotBoard = ({ children }: { children: ReactNode }): JSX.Element => {
  return <div className={classNames('w-[500px]', 'h-[168px]', 'bg-gray-100')}>{children}</div>
}

export default BotBoard
