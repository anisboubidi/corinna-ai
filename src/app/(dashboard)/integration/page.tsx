import { onGetPaymentConnected } from '@/src/actions/settings'
import InfoBar from '@/src/components/infobar'
import IntegrationsList from '@/src/components/integrations'

const IntegrationsPage = async () => {
  const payment = await onGetPaymentConnected()

  const connections = {
    stripe: payment ? true : false,
  }

  return (
    <>
      <InfoBar />
      <IntegrationsList connections={connections} />
    </>
  )
}

export default IntegrationsPage
