import { AboutEvent } from '@/components/AboutEvent/AboutEvent'
import { Container } from '@/components/Container/Container'
import { Logo } from '@/components/Logo/Logo'
import { RegistrationForm } from '@/components/RegistrationForm/RegistrationForm'
import { Suspense } from 'react'

export function HomePage() {
	return (
		<main>
			<Container>
				<div className='text-center space-y-5 mb-10 leading-none lg:text-left lg:space-y-7 lg:mb-16'>
					<Logo />
					<h1 className='text-4xl sm:text-5xl 2xl:text-7xl'>
						<span className='text-blue block'>CodeCraft</span>
						<span className='text-gray-100'>Summit 2025</span>
					</h1>
				</div>

				<div className='grid grid-cols-1 gap-4 lg:grid md:gap-5 lg:grid-cols-10 lg:grid-rows-[1fr]'>
					<div className='lg:col-span-6'>
						<AboutEvent />
					</div>
					<div className='lg:col-span-4 lg:h-full'>
						<Suspense>
							<RegistrationForm />
						</Suspense>
					</div>
				</div>
			</Container>
		</main>
	)
}

