import React, { FC } from 'react'

interface HeaderProps {
  children?: React.ReactNode
}

const Header: FC<HeaderProps> = ({ children }) => (
  <header>{children || 'header'}</header>
)

export default Header
