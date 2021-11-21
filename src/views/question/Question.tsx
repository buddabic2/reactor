import CodeCell from '../../components/code-cell'
import styled from 'styled-components'
import { useActions } from '../../hooks/use-actions'
import { useTypedSelector } from '../../hooks/use-typed-selector' 
import { Cell } from '../../state'
import { DescriptionElementType } from '../../questionBank'

interface QuestionProps {
  title: string
  description: {
    type: DescriptionElementType
    content: string | string[]
  }[]
  media: string
  startingCode: string
}

const parseQuestionDescriptionElement = (type: string, content: string | string[]) => {
  switch(type) {
    case DescriptionElementType.PARAGRAPH:
      return <p>{content}</p>
    case DescriptionElementType.LIST:
      // @ts-ignore
      return <ul>{content.map(el => <li>{el}</li>)}</ul>
    case DescriptionElementType.REMINDER:
      return <h3>{content}</h3>
  }
}

const Question: React.FC<QuestionProps> = ({ title, description, media, startingCode }) => {
  const { insertCellAfter } = useActions()
  // Hack, loads just one cell
  // @ts-ignore
  const cells: Cell[] = useTypedSelector(({ cells: { order, data } }) => order.map((id: string | number) => data[id]))
  if (!cells.length) {
    insertCellAfter(null, 'code')
  }

  const parsedDescription = description.map(({ type, content }) => parseQuestionDescriptionElement(type, content))

  return (
    <QuestionWrapper>
      <QuestionCard>
        <QuestionTitle>{title}</QuestionTitle>
        <QuestionTop>
          <QuestionDescription>
            {parsedDescription}
          </QuestionDescription>
          <img src={media} alt="question image" />
        </QuestionTop>
      </QuestionCard>
      {cells.length && <CodeCell cell={cells[0]} startingCode={startingCode}/>}
    </QuestionWrapper>
  )
}

export default Question

const QuestionWrapper = styled.div`
  margin: 50px;
  width: 70vw;
  position: relative;
`

const QuestionCard = styled.div`
  background-color: #212529;
  border-radius: 5px;
  margin-bottom: 50px;
  `

const QuestionTitle = styled.h3`
  border-bottom: 1px solid #343a40;
  font-size: 2rem;
  font-weight: 400;
  padding: 10px;
  margin: 0;
`

const QuestionTop = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 400px;
  padding: 10px;
  
  img{
    width: 100%;
    max-width: 300px;
    float: right;
  }
  `

const QuestionDescription = styled.div`
  width: 100%;
  margin-right: 25px;
  overflow: scroll;
  border-right: 1px solid #343a40;
  padding: 10px;
  `