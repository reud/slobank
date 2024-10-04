import Board from '@renderer/components/Board'
import Counter from '@renderer/components/Counter'
import Pocket from '@renderer/components/Pocket'
import Versions from '@renderer/components/Versions'
import { GameData, jpycGameDataDefault, ShowBonusType } from '../../../common/consts'
import classNames from 'classnames'
import SlampGraph from '@renderer/components/SlampGraph'
import { useEffect, useMemo, useState } from 'react'

const PageBoard = (): JSX.Element => {
  const [gamedata, setBoard] = useState<GameData<'JPYC', '枚'>>(jpycGameDataDefault)
  const [versions, setVersions] = useState<Array<[number, ShowBonusType]>>([])
  const [diffs, setDiffs] = useState<Array<number>>([])

  useMemo(() => {
    // ipcMain で renderer からのメッセージを受け取り処理する
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window.api as any).getGameData((data) => {
      setBoard(data)
    })
  }, [])

  useEffect(() => {
    setVersions([...gamedata.versions])
    setDiffs([...gamedata.diffs])
  }, [gamedata])

  return (
    <Board>
      <div className={classNames('grid', 'grid-cols-4', 'gap-4', 'py-2', 'mx-2')}>
        <Counter
          label="BIG"
          data1={`${gamedata.bigCount}`}
          data2={
            gamedata.bigCount == 0 ? '' : `1/${(gamedata.totalGame / gamedata.bigCount).toFixed(1)}`
          }
          labelStyleClass="bg-red-400"
        />
        <Counter
          label="REG"
          data1={`${gamedata.regCount}`}
          data2={
            gamedata.regCount == 0 ? '' : `1/${(gamedata.totalGame / gamedata.regCount).toFixed(1)}`
          }
          labelStyleClass="bg-amber-400"
        />
        <Counter
          label="RT"
          data1={`${gamedata.rtCount}`}
          data2={
            gamedata.rtCount == 0 ? '' : `1/${(gamedata.totalGame / gamedata.rtCount).toFixed(1)}`
          }
          labelStyleClass="bg-cyan-400"
        />
        <Counter
          label="GAME"
          data1={`${gamedata.gameCount}`}
          data2={`${gamedata.totalGame}`}
          labelStyleClass="bg-lime-400"
        />
      </div>
      <div className={classNames('grid', 'grid-cols-2', 'gap-4', 'py-2', 'mx-2')}>
        <Versions versions={versions} />
        <Pocket<'JPYC', '枚'>
          rate={gamedata.rate}
          walletMoney={gamedata.walletMoney}
          bankMoney={gamedata.bankMoney}
          medal={gamedata.medal}
          diff={gamedata.diff}
        />
      </div>
      <div className={classNames('grid', 'grid-cols-2', 'gap-4', 'py-2', 'mx-2')}>
        <SlampGraph diffs={diffs} />
      </div>
    </Board>
  )
}

export default PageBoard
