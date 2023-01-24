import React, {FC} from 'react'
import NextHead from 'next/head'

interface HeadProps {
  children?: React.ReactNode
  title: string
  description: string
}

const Head: FC<HeadProps> = ({children, title, description}) => {
  return (
    <NextHead>
      <meta name="description" content={description}/>
      <meta name="viewport" content="initial-scale=1, width=device-width"/>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico"/>
      {children}
    </NextHead>
  )
}

export default Head
