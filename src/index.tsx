// import 'bulmaswatch/superhero/bulmaswatch.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './state'
import { QUESTION_BANK } from './questionBank'
import SideNav from './views/sidenav/SideNav'
import styled from 'styled-components'
import LandingPage from './views/landing/LandingPage'
import Question from './views/question/Question'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './reset.css'

const questionsRoutesList = QUESTION_BANK.map(question => <Route path={question.href} element={<Question {...question} />}/>)
const navbarQuestionsList = QUESTION_BANK.map(({ href, title }) => { return { title, href } })

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <AppWrapper>
          <SideNav questionsList={navbarQuestionsList}/>
          <Body>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              {questionsRoutesList}
            </Routes>
          </Body>
        </AppWrapper>
      </Provider>
    </Router>
  )
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const Body = styled.div`
  margin-left: 280px;
`

ReactDOM.render(<App />, document.querySelector('#root'))