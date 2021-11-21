import styled from 'styled-components'
import NewTabIcon from '../../assets/new-tab.png'

interface SideNavLinkProps {
  label: string
  href: string
}

const SideNavLink: React.FC<SideNavLinkProps> = ({ label, href }) => {

  return (
    <SideNavLinkWrapper>
      <a href={href} target="_blank" rel="noreferrer">{label}</a>
      <img src={NewTabIcon} alt="Open in new tab icon"/>
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

  img {
    height: 20px;
    margin-left: 20px;
    opacity: 0;
  }

  :hover {
    background-color: #f8f9fa11;
    color: #f8f9fa;

    img {
      opacity: 1;
      cursor: pointer;
    }
  }
`