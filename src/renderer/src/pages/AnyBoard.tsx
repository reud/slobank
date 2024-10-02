import Board from '@renderer/components/Board'
import Counter from '@renderer/components/Counter'
import Pocket from '@renderer/components/Pocket'
import Versions from '@renderer/components/Versions'
import { FiveSlot } from '../../../common/consts'
import classNames from 'classnames'
import SlampGraph from '@renderer/components/SlampGraph'

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
            [1024, 'BIG'],
            [999, 'BIG'],
            [23, 'REG'],
            [1, 'BIG'],
            [644, 'NONE']
          ]}
        />
        <Pocket<'JPYC', '枚'>
          rate={FiveSlot}
          walletMoney={[32000, 'JPYC']}
          bankMoney={[32452, 'JPYC']}
          medal={[12345, '枚']}
          diff={[2345, '枚']}
        />
      </div>
      <div className={classNames('grid', 'grid-cols-2', 'gap-4', 'py-2', 'mx-2')}>
        <SlampGraph />
      </div>
    </Board>
  )
}

export default AnyBoard
