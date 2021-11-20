import { useTypedSelector } from '../hooks/use-typed-selector' 
import CellListItem from '../components/cell-list-item'
import { Cell } from '../state'
import AddCell from './add-cell'
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
      {addCellEnabled && <AddCell previousCellId={cell.id} />}
    </Fragment>
  ))

  return (
    <div className='cell-list'>
      <AddCell forceVisible={!cells.length} previousCellId={null} />
      {renederedCells}
    </div>
  )
}

export default CellList