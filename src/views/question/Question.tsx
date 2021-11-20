import CellList from '../../components/cell-list'
import styled from 'styled-components'

interface QuestionProps {
  title: string
  description: string
  media: string
  startingCode: string
}

const Question: React.FC<QuestionProps> = ({ title, description, media, startingCode }) => {
  return (
    <QuestionWrapper>
      <QuestionCard>
        <QuestionTitle>{title}</QuestionTitle>
        <QuestionTop>
          <QuestionDescription>{description}</QuestionDescription>
          <img src={media} alt="question image" />
        </QuestionTop>
      </QuestionCard>
      <CellList addCellEnabled={false} startingCode={startingCode}/>
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