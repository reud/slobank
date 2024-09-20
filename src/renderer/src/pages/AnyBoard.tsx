import Board from '@renderer/components/Board'
import Counter from '@renderer/components/Counter'

const AnyBoard = (): JSX.Element => {
  return (
    <Board>
      <div className="grid grid-cols-4 gap-4">
        <Counter label="BIG" data1="22" data2="1/317.5" labelStyleClass="bg-red-400" />
        <Counter label="REG" data1="22" data2="1/317.5" labelStyleClass="bg-amber-400" />
        <Counter label="RT" data1="22" data2="1/317.5" labelStyleClass="bg-cyan-400" />
        <Counter label="GAME" data1="223" data2="21325" labelStyleClass="bg-lime-400" />
      </div>
    </Board>
  )
}

export default AnyBoard
