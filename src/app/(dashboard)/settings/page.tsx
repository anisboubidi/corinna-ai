import InfoBar from '@/src/components/infobar'
import BillingSettings from '@/src/components/settings/billing-settings'
import ChangePassword from '@/src/components/settings/change-password'
import DarkModetoggle from '@/src/components/settings/dark-mode'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
        <BillingSettings />
        <DarkModetoggle />
        <ChangePassword />
      </div>
    </>
  )
}

export default Page
