import { Container } from '@/components/Container/Container'
import { InviteLink } from '@/components/InviteLink/InviteLink'
import { Logo } from '@/components/Logo/Logo'
import { RankingItem } from '@/components/RankingItem/RankingItem'
import { StatCard } from '@/components/StatCard/StatCard'
import { LuBadgeCheck, LuMedal, LuMousePointerClick } from 'react-icons/lu'

interface ConfirmationPageProps {
	inviteUrl: string
	ranking: { name: string; score: number }[]
	totalClicks: number
	totalSubscribers: number
	position: number | null
}

export function ConfirmationPage({
	inviteUrl,
	ranking,
	totalClicks,
	totalSubscribers,
	position
}: ConfirmationPageProps) {
	return (
		<main>
			<Container>
				<Logo />
				<div className='grid gap-10 lg:grid-cols-10'>
					<div className='lg:col-span-6 2xl:col-span-5'>
						<div className='mt-6 mb-7 lg:mt-16 lg:mb-10 space-y-2'>
							<h1 className='text-gray-100 text-2xl lg:text-[2.5rem]'>Inscrição confirmada!</h1>
							<p className='leading-[160%] text-gray-300'>
								Para entrar no evento, acesse o link enviado para seu e-mail.
							</p>
						</div>
						<div className='mb-5 lg:space-y-3 lg:mb-6 space-y-4'>
							<h2 className='text-xl text-gray-200'>Indique e Ganhe</h2>
							<p className='leading-[160%] text-gray-300'>
								Convide mais pessoas para o evento e concorra a prêmios exclusivos!
								<br />É só compartilhar o link abaixo e acompanhar as inscrições:
							</p>
						</div>

						<InviteLink url={inviteUrl} />

						<div className='grid gap-2 mt-5 sm:grid-cols-3 md:gap-3 md:mt-6'>
							<StatCard title='Acessos ao link' value={totalClicks.toString()} icon={LuMousePointerClick} />
							<StatCard title='Inscrições feitas' value={totalSubscribers.toString()} icon={LuBadgeCheck} />
							<StatCard title='Posição no ranking' value={position ? position.toString() + 'º' : '-'} icon={LuMedal} />
						</div>
					</div>
					<div className='lg:col-span-4 lg:col-start-7'>
						<h2 className='text-xl text-gray-200 mb-5'>Ranking de indicações</h2>
						<div className='space-y-3'>
							{ranking.length > 0 ? (
								ranking.map((item, index) => (
									<RankingItem
										key={item.name}
										name={item.name}
										indications={item.score}
										position={index + 1}
										badge={index + 1 === position}
									/>
								))
							) : (
								<p className='text-gray-300'>Nenhuma indicação ainda.</p>
							)}
						</div>
					</div>
				</div>
			</Container>
		</main>
	)
}

