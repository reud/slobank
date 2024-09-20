import classNames from 'classnames'

export interface CounterProps {
  label: string
  labelStyleClass: string
  data1: string
  data2: string
}

const Counter = ({ label, data1, data2, labelStyleClass }: CounterProps): JSX.Element => {
  return (
    <div className={classNames('border-zinc-400', 'border-2', 'gap-8')}>
      <div className={classNames('grid', 'grid-cols-2', 'gap-4', 'text-4xl', 'text-center')}>
        <div className={classNames(labelStyleClass)}>{label}</div>
        <div className={classNames('font-[DSEG7Modern-Bold]')}>{data1}</div>
      </div>
      <div className={classNames('text-3xl', 'text-center')}>{data2}</div>
    </div>
  )
}

export default Counter
