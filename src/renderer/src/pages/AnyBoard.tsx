import Board from '@renderer/components/Board'
import Counter from '@renderer/components/Counter'
import Versions from '@renderer/components/Versions'
import classNames from 'classnames'

const AnyBoard = (): JSX.Element => {
  return (
    <Board>
      <div className={classNames('grid', 'grid-cols-4', 'gap-4', 'py-2', 'mx-2')}>
        <Counter label="BIG" data1="22" data2="1/317.5" labelStyleClass="bg-red-400" />
        <Counter label="REG" data1="22" data2="1/317.5" labelStyleClass="bg-amber-400" />
        <Counter label="RT" data1="22" data2="1/317.5" labelStyleClass="bg-cyan-400" />
        <Counter label="GAME" data1="223" data2="21325" labelStyleClass="bg-lime-400" />
      </div>
      <div className={classNames('grid', 'grid-cols-2', 'gap-4', 'py-2', 'mx-2')}>
        <Versions
          versions={[
            [223, 'BIG'],
            [18, 'REG'],
            [1024, 'BIG']
          ]}
        />
      </div>
    </Board>
  )
}

export default AnyBoard
