import { Cell } from '../state'
import CodeCell from './code-cell'
import TextEditor from './text-editor'
import ActionBar from './action-bar'
import './cell-list-item.css'

interface CellListItemProps {
  cell: Cell
  startingCode: string
}

const CellListItem: React.FC<CellListItemProps> = ({ cell, startingCode }) => {
  let child: JSX.Element
  if (cell.type === 'code') {
    child = <>
      <div className="action-bar-wrapper">
        <ActionBar id={cell.id}/>
      </div>
      <CodeCell cell={cell} startingCode={startingCode}/>
    </>
  } else {
    child = <>
      <TextEditor cell={cell} />
      <ActionBar id={cell.id}/>
    </>
  }
  return (
    <div className='cell-list-item'>
      {child}
      <ActionBar id={cell.id}/>
    </div>
  )
}

export default CellListItem