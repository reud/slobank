import { ReactNode } from 'react'
import classNames from 'classnames'

const Board = ({ children }: { children: ReactNode }): JSX.Element => {
  return <div className={classNames('w-[1024px]', 'h-[600px]', 'bg-slate-200')}>{children}</div>
}

export default Board
