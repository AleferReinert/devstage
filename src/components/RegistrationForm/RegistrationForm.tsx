'use client'
import { zodResolver } from '@hookform/resolvers/zod'
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
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<RegistrationSchema>({ resolver: zodResolver(registrationSchema) })

	const onRegistration = (data: RegistrationSchema) => console.log(data)

	return (
		<form onSubmit={handleSubmit(onRegistration)} className='h-full' data-testid='RegistrationFormComponent'>
			<Box heading='Inscrição' className='p-6 md:p-8 h-full'>
				<div className='mb-3'>
					<Input placeholder='Nome completo' icon={LuUser} {...register('name')} error={errors.name?.message} />
				</div>
				<div className='mb-6'>
					<Input placeholder='E-mail' icon={LuMail} type='email' {...register('email')} error={errors.email?.message} />
				</div>
				<Button type='submit'>
					Confirmar
					<LuArrowRight />
				</Button>
			</Box>
		</form>
	)
}
