import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

interface SideNavLinkProps {
  label: string
  href: string
}

const SideNavLink: React.FC<SideNavLinkProps> = ({ label, href }) => {

  return (
    <SideNavLinkWrapper>
      <a href={href} target="_blank" rel="noreferrer">
        {label}
        <FontAwesomeIcon className="icon" icon={faExternalLinkAlt}/>
      </a>
    </SideNavLinkWrapper>
  )
}

export default SideNavLink

const SideNavLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

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

  .icon {
    margin-left: 20px;
    opacity: 0;
  }

  :hover {
    background-color: #f8f9fa11;
    color: #f8f9fa;

    .icon {
      opacity: 1;
      cursor: pointer;
    }
  }
`