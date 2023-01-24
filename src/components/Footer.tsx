import React, {FC} from 'react'

interface FooterProps {
  children?: React.ReactNode
}

const Footer: FC<FooterProps> = ({children}) => {
  return (
    <header>{children || 'footer'}</header>
  )
}

export default Footer
