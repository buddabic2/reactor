import styled from 'styled-components';
import SideNavButton from './SideNavButton'
import SideNavLink from './SideNavLink'
import SideNavHeader from './SideNavHeader'
import { Link } from "react-router-dom";

interface SideNavProps {
  questionsList: {
    href: string,
    title: string
  }[]
}

const learningCentreList = [
  { label: 'React Documentation', href: 'https://reactjs.org/docs/getting-started.html' },
  { label: 'React Practice', href: 'https://www.freecodecamp.org/learn/front-end-development-libraries/#react' },
  { label: 'Array', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' },
  { label: 'String', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String' }
]

const SideNav: React.FC<SideNavProps> = ({ questionsList }) => {
  return (
    <SideNavWrapper>
      <Logo><Link to='/'>Reactor</Link></Logo>
      <SideNavHeader label='Questions'>
        <SideNavQuestionsWrapper>{questionsList.map(({ title, href }) => <SideNavButton label={title} href={href}/>)}</SideNavQuestionsWrapper>
      </SideNavHeader>
      <SideNavHeader label='Learning Centre'>
        {learningCentreList.map(({ label, href }) => <SideNavLink label={label} href={href}/>)}
      </SideNavHeader>
      <SideNavFooter>
        <p>by Dawid Budaszewski</p>
        <a href="https://github.com/buddabic2" target="_blank" rel="noreferrer">
          <i className="fab fa-github-square" />
        </a>
        <a href="https://www.linkedin.com/in/dawid-budaszewski/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin" />
        </a>
      </SideNavFooter>
    </SideNavWrapper>
  )
}

export default SideNav

const SideNavWrapper = styled.div`
  min-width: 280px;
  background-color: #212529;
  /* position: relative; */
  position: fixed;
  height: 100%;
  overflow: auto;
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

const SideNavQuestionsWrapper = styled.div`
  overflow: scroll;
  max-height: 300px;
`

const SideNavFooter = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  margin: 5px;

  i {
    color: #dee2e6;
  }

  p {
    margin: 0;
  }

  a:first-of-type {
    margin: 0 10px;
  }
`