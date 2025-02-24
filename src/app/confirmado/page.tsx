import { Container } from '@/components/Container/Container'
import { LinkCopy } from '@/components/LinkCopy/LinkCopy'
import { Logo } from '@/components/Logo/Logo'

export default function ConfirmedPage() {
	return (
		<main>
			<Container>
				<Logo />
				<div className='mt-6 mb-7 lg:mt-16 lg:mb-10 space-y-2'>
					<h1 className='text-gray-100 text-2xl lg:text-[2.5rem]'>Inscrição confirmada!</h1>
					<p className='leading-[160%] text-gray-300'>Para entrar no evento, acesse o link enviado para seu e-mail.</p>
				</div>
				<div className='mb-5 lg:space-y-3 lg:mb-6 space-y-4'>
					<h2 className='text-xl text-gray-200'>Indique e Ganhe</h2>
					<p className='leading-[160%] text-gray-300'>
						Convide mais pessoas para o evento e concorra a prêmios exclusivos! É só compartilhar o link abaixo e
						acompanhar as inscrições:
					</p>
				</div>

				<LinkCopy url='http://example.com/0a2782929' />
			</Container>
		</main>
	)
}

