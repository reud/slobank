import { ShowBonusType } from '../../../common/consts'
import classNames from 'classnames'
import { useCallback, useMemo, useState } from 'react'

// NOTE: 古い結果が最初になるように渡す
export interface VersionStackProps {
  game: number
  bonusType: ShowBonusType
}

const VersionStack = ({ game, bonusType }: VersionStackProps): JSX.Element => {
  const stackRange = [...Array(Math.ceil(game / 100)).keys()]

  const greenClass = classNames('bg-green-500', 'rounded-full', 'text-sm', 'text-center')
  const yellowClass = classNames('bg-yellow-500', 'rounded-full', 'text-sm', 'text-center')
  const redClass = classNames('bg-red-500', 'rounded-full', 'text-sm', 'text-center')

  const switchColorByIndex = useCallback((idx: number): string => {
    if (idx < 5) {
      return greenClass
    }
    if (idx < 10) {
      return yellowClass
    }

    return redClass
  }, [])

  // for redClass
  const [show, setShow] = useState(false)

  useMemo(
    () =>
      setInterval(() => {
        setShow((s) => !s)
      }, 1000),
    []
  )

  const bottomColor =
    bonusType == 'BIG' ? 'bg-red-300' : bonusType == 'REG' ? 'bg-yellow-200' : 'bg-gray-300'
  return (
    <div className={classNames('flex', 'flex-col-reverse')}>
      <div className={classNames('text-center', 'font-bold', bottomColor)}>
        {bonusType != 'NONE' ? bonusType : '\u00A0'}
      </div>
      {stackRange.map((_, i) => (
        <div
          key={i}
          className={
            switchColorByIndex(i) + (switchColorByIndex(i) == redClass && !show ? ' invisible' : '')
          }
        >
          &nbsp;
        </div>
      ))}
      <div className={classNames('text-center', 'font-bold')}>{game}</div>
    </div>
  )
}

export default VersionStack
