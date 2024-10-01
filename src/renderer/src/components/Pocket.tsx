import SubBoard from './SubBoard'
import classNames from 'classnames'
import { Rate, UnitMedal, UnitMedalType, UnitMoney, UnitMoneyType } from 'src/common/consts'
import DollarBox from './DollarBox'

// NOTE: 古い結果が最初になるように渡す
export interface PocketProps<S extends UnitMoneyType, T extends UnitMedalType> {
  rate: Rate<S, T>
  walletMoney: UnitMoney<S>
  bankMoney: UnitMoney<S>
  medal: UnitMedal<T>
  diff: UnitMedal<T>
}

const DollarBoxes = ({ boxCount }: { boxCount: number }): JSX.Element => {
  const cns: Array<classNames.ArgumentArray> = [
    ['m-0', 'p-0', 'translate-x-20', 'translate-y-10'],
    ['m-0', 'p-0', 'translate-x-20', '-translate-y-[48px]'],
    ['m-0', 'p-0', 'translate-x-20', '-translate-y-[136px]'],
    ['m-0', 'p-0', 'translate-x-4', '-translate-y-[160px]'],
    ['m-0', 'p-0', 'translate-x-4', '-translate-y-[248px]'],
    ['m-0', 'p-0', 'translate-x-4', '-translate-y-[336px]']
  ]
  if (boxCount < 7) {
    return (
      <>
        {cns.slice(0, boxCount).map((cn, i) => {
          return (
            <div className={classNames(...cn)} key={i}>
              <DollarBox />
            </div>
          )
        })}
      </>
    )
  }
  return <div className={classNames('text-8xl', 'text-center')}>💰</div>
}

const Pocket = <S extends UnitMoneyType, T extends UnitMedalType>({
  rate,
  walletMoney,
  bankMoney,
  medal,
  diff
}: PocketProps<S, T>): JSX.Element => {
  return (
    <SubBoard>
      <div className={classNames('flex', 'flex-col')}>
        <div className={classNames('basis-1/6', 'flex-col', 'my-2')}>
          <div className={classNames('grid', 'grid-cols-3')}>
            <div className={classNames('text-center', 'text-3xl')}>
              {rate[0][0][0]}
              {rate[0][0][1]}
            </div>
            <div className={classNames('text-center', 'text-3xl')}>→</div>
            <div className={classNames('text-center', 'text-3xl')}>
              {rate[0][1][0]}
              {rate[0][1][1]}
            </div>
          </div>
          <div className={classNames('grid', 'grid-cols-3')}>
            <div className={classNames('text-center', 'text-3xl')}>
              {rate[1][0][0]}
              {rate[1][0][1]}
            </div>
            <div className={classNames('text-center', 'text-3xl')}>→</div>
            <div className={classNames('text-center', 'text-3xl')}>
              {rate[1][1][0]}
              {rate[1][1][1]}
            </div>
          </div>
        </div>
        <div className={classNames('basis-2/6', 'my-2')}>
          <div className={classNames('text-5xl', 'text-right', 'mr-4')}>💵{walletMoney}</div>
          <div className={classNames('text-3xl', 'text-right', 'mr-4')}>🏦{bankMoney}</div>
        </div>
        <div className={classNames('basis-3/6', 'grid', 'grid-cols-3', 'my-2')}>
          <div className={classNames('col-span-2')}>
            <div className={classNames('text-right', 'text-6xl')}>{medal}</div>
            <div className={classNames('text-right', 'text-4xl')}>{diff}</div>
          </div>
          <div>
            <DollarBoxes boxCount={7} />
          </div>
        </div>
      </div>
    </SubBoard>
  )
}

export default Pocket
