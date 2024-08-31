import { onGetAllAccountDomains } from '@/src/actions/settings'
import ConversationMenu from '@/src/components/conversations'
import Messenger from '@/src/components/conversations/messenger'
import InfoBar from '@/src/components/infobar'
import { Separator } from '@/src/components/ui/separator'
import React from 'react'

type Props = {}

const ConversationPage = async (props: Props) => {
  const domains = await onGetAllAccountDomains()
  return (
    <div className="w-full h-full flex">
      <ConversationMenu domains={domains?.domains} />

      <Separator orientation="vertical" />
      <div className="w-full flex flex-col">
        <div className="px-5">
          <InfoBar />
        </div>
        <Messenger />
      </div>
    </div>
  )
}

export default ConversationPage
