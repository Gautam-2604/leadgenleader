import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

async function LandingPageNavbar() {
    const user = await currentUser()
    if(!user)
  return (
    <div>Please sign in</div>
  )
  else{
    return(
        <div>Hello {user.firstName}</div>
    )
  }
}

export default LandingPageNavbar