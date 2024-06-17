import { Button } from '@/components/ui/button'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

async function LandingPageNavbar() {
    const user = await currentUser()
    return(
        <nav className='flex w-screen items-center justify-between p-6'>
            <div>
                <Link href='/' className="text-2xl font-bold text-purple-500 no-underline">
                    LeadGenMagnet
                </Link>

            </div>
            <div className='text-purple-500 font-semibold text-lg'>
                {user ? (
                    <div className='flex flex-row gap-x-4 items-center'>
                        <Button variant='outline'>
                            Open App
                        </Button>
                        <UserButton />
                    </div>
                ):(
                    <SignInButton />
                )}

            </div>

        </nav>
    )
}

export default LandingPageNavbar