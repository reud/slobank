import { ReactNode } from 'react'
import classNames from 'classnames'

const SubBoard = ({ children }: { children: ReactNode }): JSX.Element => {
  return <div className={classNames('w-[500px]', 'h-[300px]', 'bg-cyan-200')}>{children}</div>
}

export default SubBoard
