import { ShowBonusType, ShowVersions } from '../../../common/consts'
import SubBoard from './SubBoard'
import VersionStack from './VersionStack'
import classNames from 'classnames'
import { useMemo } from 'react'

// NOTE: 古い結果が最初になるように渡す
export interface VersionsProps {
  versions: Array<[number, ShowBonusType]>
}

const Versions = ({ versions }: VersionsProps): JSX.Element => {
  const showVersions: ShowVersions = useMemo(() => {
    if (versions.length >= 10) {
      return versions.slice(-10) as ShowVersions
    } else {
      const defaultValue = [0, 'NONE']
      const padding = new Array(10 - versions.length).fill(defaultValue)
      return padding.concat(versions) as ShowVersions
    }
  }, [versions])

  return (
    <SubBoard>
      <div className={classNames('grid', 'grid-cols-10', 'h-full')}>
        {showVersions.reverse().map((v, i) => (
          <VersionStack game={v[0]} bonusType={v[1]} key={i} />
        ))}
      </div>
    </SubBoard>
  )
}

export default Versions
