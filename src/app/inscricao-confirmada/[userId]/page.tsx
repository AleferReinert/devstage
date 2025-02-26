import { ConfirmationPage } from '@/components/ConfirmationPage/ConfirmationPage'
import {
	getRanking,
	getSubscriberInviteClicks,
	getSubscriberInviteCount,
	getSubscriberRankingPosition
} from '@/http/api'

export default async function ConfirmationPagePopulated({ params }: { params: Promise<{ userId: string }> }) {
	const { userId } = await params
	const inviteUrl = `${process.env.API_URL}/invites/${userId}`
	const { ranking } = await getRanking()
	const { count: totalClicks } = await getSubscriberInviteClicks(userId)
	const { count: totalSubscribers } = await getSubscriberInviteCount(userId)
	const { position } = await getSubscriberRankingPosition(userId)

	return (
		<ConfirmationPage
			inviteUrl={inviteUrl}
			ranking={ranking}
			totalClicks={totalClicks}
			totalSubscribers={totalSubscribers}
			position={position}
		/>
	)
}

