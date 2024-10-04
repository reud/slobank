import { GameData } from '../common/consts'
import { Machine } from '../common/machine'

const sleep = (ms: number): Promise<void> => new Promise((res) => setTimeout(res, ms))

export const SlotSimulator = async (
  sender: (data: GameData<'JPYC', '枚'>) => void,
  startData: GameData<'JPYC', '枚'>,
  machine: Machine
): Promise<void> => {
  sender(startData)
  const data = startData
  setInterval(() => {
    const bet = machine.maxBet()
    for (let i = 0; i < bet; i++) {
      data.medal = [data.medal[0] - 1, data.medal[1]]
      data.diff = [data.diff[0] - 1, data.diff[1]]
      sender(data)
      sleep(50)
    }
    const [ret, flag] = machine.roll(bet)
    if (flag == 'BIG') {
      data.bigCount += 1
      data.versions[data.versions.length - 1] = [data.gameCount + 1, 'BIG']
      data.versions.push([0, 'NONE'])
      data.gameCount = 0
      data.totalGame += 1
    } else if (flag == 'REG') {
      data.regCount += 1
      data.versions[data.versions.length - 1] = [data.gameCount + 1, 'REG']
      data.versions.push([0, 'REG'])
      data.gameCount = 0
      data.totalGame += 1
    } else if (flag != 'BONUS_PLAY') {
      data.gameCount += 1
      data.totalGame += 1
      data.versions[data.versions.length - 1][0]++
    }
    for (let i = 0; i < ret; i++) {
      data.medal = [data.medal[0] + 1, data.medal[1]]
      data.diff = [data.diff[0] + 1, data.diff[1]]
      sender(data)
      sleep(50)
    }
    data.diffs.push(data.diff[0])
    sender(data)
  }, 100)
}
