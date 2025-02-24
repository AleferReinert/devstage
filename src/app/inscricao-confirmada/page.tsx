import { Container } from '@/components/Container/Container'
import { LinkCopy } from '@/components/LinkCopy/LinkCopy'
import { Logo } from '@/components/Logo/Logo'
import { RankingItem } from '@/components/RankingItem/RankingItem'
import { StatCard } from '@/components/StatCard/StatCard'
import { LuBadgeCheck, LuMedal, LuMousePointerClick } from 'react-icons/lu'

export default function ConfirmedPage() {
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

						<LinkCopy url='http://example.com/0a2782929' />

						<div className='grid gap-2 mt-5 sm:grid-cols-3 md:gap-3 md:mt-6'>
							<StatCard title='Acessos ao link' value='942' icon={LuMousePointerClick} />
							<StatCard title='Inscrições feitas' value='875' icon={LuBadgeCheck} />
							<StatCard title='Posição no ranking' value='3º' icon={LuMedal} />
						</div>
					</div>
					<div className='lg:col-span-4 lg:col-start-7'>
						<h2 className='text-xl text-gray-200 mb-5'>Ranking de indicações</h2>
						<div className='space-y-3'>
							<RankingItem name='André Souza' indications={1.128} position={1} />
							<RankingItem name='Melissa Loures' indications={928} position={2} />
							<RankingItem name='Rodrigo Gonçalves' indications={875} position={3} />
						</div>
					</div>
				</div>
			</Container>
		</main>
	)
}

