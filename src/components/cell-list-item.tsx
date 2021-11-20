import { Cell } from '../state'
import CodeCell from './code-cell'
import TextEditor from './text-editor'
import './cell-list-item.css'

interface CellListItemProps {
  cell: Cell
  startingCode: string
}

const CellListItem: React.FC<CellListItemProps> = ({ cell, startingCode }) => {
  let child: JSX.Element
  if (cell.type === 'code') {
    child = <>
      <CodeCell cell={cell} startingCode={startingCode}/>
    </>
  } else {
    child = <>
      <TextEditor cell={cell} />
    </>
  }
  return (
    <div className='cell-list-item'>
      {child}
    </div>
  )
}

export default CellListItem