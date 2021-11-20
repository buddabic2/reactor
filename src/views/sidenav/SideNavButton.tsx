import styled, { css } from 'styled-components'
import {
  Link,
  useLocation
} from "react-router-dom";

interface SideNavButtonProps {
  label: string
  href: string
}

const SideNavButton: React.FC<SideNavButtonProps> = ({ label, href }) => {
  const location = useLocation()

  return (
    <SideNavButtonWrapper active={location.pathname === `/${href}`}>
      <Link to={href}>{label}</Link>
      <span></span>
    </SideNavButtonWrapper>
  )
}

export default SideNavButton

const SideNavButtonWrapper = styled.div<{ active: boolean }>`
  a {
    padding: 7px 0;
    display: block;
    padding-left: 40px;
    text-decoration: none;
    color: #f8f9fa;
    font-size: 1.2rem;
    font-weight: 200;
    transition: 0.1s;
  }

  :hover {
    background-color: #f8f9fa11;
    color: #f8f9fa
  }

  ${props => props && props.active && css`
    background-color: #f8f9fa11;
  `}
`