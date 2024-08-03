import NavSidebar from '@/components/navigation/NavSidebar'
import React from 'react'

const MainLayout = async ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='flex h-full'>
            <div className='hidden md:flex h-screen w-[72px] z-30 flex-col fix inset-y-0'>
                <NavSidebar/>
            </div>
            <main className='h-full'> {/* md:pl-[72px] */}
                {children}
            </main>
        </div>
    )
}

export default MainLayout