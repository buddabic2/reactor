import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styled, { css } from 'styled-components';

interface SideNavHeaderProps {
  label: string
}

const SideNavHeader: React.FC<SideNavHeaderProps> = ({ label, children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <LabelWrapper open={open}>
        {label}
        <FontAwesomeIcon className="icon" icon={faChevronDown} onClick={() => setOpen(!open)}/>
      </LabelWrapper>
      {open && children}
    </div>
  )
}

export default SideNavHeader

const LabelWrapper = styled.h3<{ open: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 300;
  padding-left: 20px;

  .icon {
    height: 30px;
    width: 30px;
    margin-left: 20px;
    cursor: pointer;
    transition: 0.15s ease-in;

    ${props => props.open && css`
      transform: rotate(180deg);
    `}
  }
`