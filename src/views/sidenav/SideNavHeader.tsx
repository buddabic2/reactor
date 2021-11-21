import { useState } from 'react'
import styled, { css } from 'styled-components';
import Arrow from '../../assets/arrow-down.png'

interface SideNavHeaderProps {
  label: string
}

const SideNavHeader: React.FC<SideNavHeaderProps> = ({ label, children }) => {
  const [open, setOpen] = useState(false)
  return (
    <SideNavHeaderWrapper open={open}>
      <LabelWrapper>
        {label}
        <img src={Arrow} onClick={() => setOpen(!open)} alt="open/collapse arrow"/>
      </LabelWrapper>
      {open && children}
    </SideNavHeaderWrapper>
  )
}

export default SideNavHeader

const SideNavHeaderWrapper = styled.div<{ open: boolean }>`
  img {
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

const LabelWrapper = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 300;
  padding-left: 20px;
`