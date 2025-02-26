'use client'
import { subscribeToEvent } from '@/http/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { useForm } from 'react-hook-form'
import { LuArrowRight, LuMail, LuUser } from 'react-icons/lu'
import { z } from 'zod'
import { Box } from '../Box/Box'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'

const registrationSchema = z.object({
	name: z.string().min(2, 'Digite seu nome completo'),
	email: z.string().email('Digite um e-mail válido')
})

type RegistrationSchema = z.infer<typeof registrationSchema>

export function RegistrationForm() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<RegistrationSchema>({ resolver: zodResolver(registrationSchema) })

	async function onRegistration({ name, email }: RegistrationSchema) {
		const referrer = searchParams.get('referrer')
		const { subscriberId } = await subscribeToEvent({ name, email, referrer })
		router.push(`/inscricao-confirmada/${subscriberId}`)
	}

	return (
		<Suspense>
			<form onSubmit={handleSubmit(onRegistration)} className='h-full' data-testid='RegistrationFormComponent'>
				<Box className='p-6 md:p-8 h-full'>
					<h2 className='text-xl text-gray-200 mb-6'>Inscrição</h2>
					<div className='mb-3'>
						<Input placeholder='Nome completo' icon={LuUser} {...register('name')} error={errors.name?.message} />
					</div>
					<div className='mb-6'>
						<Input
							placeholder='E-mail'
							icon={LuMail}
							type='email'
							{...register('email')}
							error={errors.email?.message}
						/>
					</div>
					<Button type='submit'>
						Confirmar
						<LuArrowRight />
					</Button>
				</Box>
			</form>
		</Suspense>
	)
}
