import { useTypedSelector } from '../hooks/use-typed-selector' 
import CellListItem from '../components/cell-list-item'
import { Cell } from '../state'
import { Fragment } from 'react'
import './cell-list.css'

interface CellListProps {
  addCellEnabled: boolean
  startingCode: string
}

const CellList: React.FC<CellListProps> = ({ addCellEnabled, startingCode }) => {
  // @ts-ignore
  const cells: Cell[] = useTypedSelector(({ cells: { order, data } }) => order.map((id: string | number) => data[id]))

  const renederedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem key={cell.id} cell={cell} startingCode={startingCode}/>
    </Fragment>
  ))

  return (
    <div className='cell-list'>
      {renederedCells}
    </div>
  )
}

export default CellList