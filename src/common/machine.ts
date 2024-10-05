import { ShowBonusType } from './consts'

export type RollState = ShowBonusType | 'BONUS_PLAY'
export interface Machine {
  roll: (bet: number) => [number, RollState]
  maxBet: () => number
}

const getRandomInt = (max): number => {
  return Math.floor(Math.random() * max)
}

// 厳密でないジャグっぽいの
export class IJag implements Machine {
  state: 'none' | 'BIG' | 'REG' | 'BIG_PREPARE' | 'REG_PREPARE'
  last: number
  constructor() {
    this.state = 'none'
    this.last = 0
  }
  roll(bet: number): [number, RollState] {
    if (bet != this.maxBet()) {
      throw new Error('unmatch bet')
    }
    if (this.state == 'BIG' || this.state == 'REG') {
      this.last -= 14
      if (this.last <= 0) {
        this.state = 'none'
      }
      return [14, 'BONUS_PLAY']
    }
    if (this.state == 'BIG_PREPARE') {
      this.last = 280
      this.state = 'BIG'
      return [0, 'BIG']
    }
    if (this.state == 'REG_PREPARE') {
      this.last = 98
      this.state = 'REG'
      return [0, 'REG']
    }
    const r = getRandomInt(65536)

    if (r < 160) {
      // BIG
      this.state = 'BIG_PREPARE'
      return [0, 'NONE']
    } else if (r < 260) {
      // REG
      this.state = 'REG_PREPARE'
      return [0, 'NONE']
    } else if (r < 9260) {
      // replay
      return [3, 'NONE']
    } else if (r < 20000) {
      // budou
      return [8, 'NONE']
    } else if (r < 20070) {
      // cherry with BIG
      this.state = 'BIG_PREPARE'
      return [2, 'NONE']
    } else if (r < 20120) {
      // cherry with REG
      this.state = 'REG_PREPARE'
      return [2, 'NONE']
    } else if (r < 22000) {
      // cherry
      return [2, 'NONE']
    } else if (r < 22060) {
      // bell
      return [14, 'NONE']
    } else if (r < 22120) {
      // piero
      return [10, 'NONE']
    } else {
      return [0, 'NONE']
    }
  }
  maxBet(): number {
    if (this.state == 'BIG' || this.state == 'REG') {
      return 2
    }
    return 3
  }
}
