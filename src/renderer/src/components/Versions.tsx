import { BonusType } from '@renderer/consts'
import SubBoard from './SubBoard'
import VersionStack from './VersionStack'
import classNames from 'classnames'

// NOTE: 古い結果が最初になるように渡す
export interface VersionsProps {
  versions: Array<[number, BonusType]>
}

const Versions = ({ versions }: VersionsProps): JSX.Element => {
  return (
    <SubBoard>
      <div className={classNames('grid', 'grid-cols-10')}>
        {versions.map((v, i) => (
          <VersionStack game={v[0]} bonusType={v[1]} key={i} />
        ))}
      </div>
    </SubBoard>
  )
}

export default Versions
