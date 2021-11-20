import styled from 'styled-components';
import SideNavButton from './SideNavButton'
import { Link } from "react-router-dom";

interface SideNavProps {
  questionsList: {
    href: string,
    title: string
  }[]
}

const SideNav: React.FC<SideNavProps> = ({ questionsList }) => {
  return (
    <SideNavWrapper>
      <Logo><Link to='/'>Reactor</Link></Logo>
      <SideNavHeader>Questions</SideNavHeader>
      <SideNavQuestionsWrapper>
        {questionsList.map(({ title, href }) => <SideNavButton label={title} href={href}/>)}
      </SideNavQuestionsWrapper>
    </SideNavWrapper>
  )
}

export default SideNav

const SideNavWrapper = styled.div`
  min-width: 280px;
  min-height: 100vh;
  background-color: #212529;
`

const Logo = styled.div`
  a {
    text-decoration: none;
    color: #ff6ec7;
  }

  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  padding: 32px 0;
  border-bottom: 1px solid rgb(52, 58, 64);
`

const SideNavHeader = styled.h3`
  font-size: 1.4rem;
  padding-left: 20px;
  font-weight: 300;
`

const SideNavQuestionsWrapper = styled.div`
  overflow: scroll;
`