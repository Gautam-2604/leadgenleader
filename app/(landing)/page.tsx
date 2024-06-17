import { UserButton } from '@clerk/nextjs'
import React from 'react'

const LandingPage = () => {
  return (
    <UserButton afterSignOutUrl='/'/>
  )
}

export default LandingPage