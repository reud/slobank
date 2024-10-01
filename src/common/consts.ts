import { FixedLengthArray } from '../renderer/src/utils/typeutil'

export type BonusType = 'BIG' | 'REG'
export type ShowBonusType = BonusType | 'NONE'
export type ShowVersions = FixedLengthArray<[number, ShowBonusType], 10>

export type UnitMoneyType = 'JPYC'
export type UnitMedalType = '枚'

export type UnitMoney<S extends UnitMoneyType> = [number, S]
export type UnitMedal<S extends UnitMedalType> = [number, S]

export type InRate<S extends UnitMoneyType, T extends UnitMedalType> = [UnitMoney<S>, UnitMedal<T>]
export type OutRate<S extends UnitMoneyType, T extends UnitMedalType> = [UnitMedal<T>, UnitMoney<S>]

export type Rate<S extends UnitMoneyType, T extends UnitMedalType> = [InRate<S, T>, OutRate<S, T>]
export const FiveSlot: Rate<'JPYC', '枚'> = [
  [
    [1000, 'JPYC'],
    [200, '枚']
  ],
  [
    [5, '枚'],
    [20, 'JPYC']
  ]
]
