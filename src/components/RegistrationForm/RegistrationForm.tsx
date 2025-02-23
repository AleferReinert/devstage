import { LuArrowRight, LuMail, LuUser } from 'react-icons/lu'
import { Box } from '../Box/Box'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'

export function RegistrationForm() {
	return (
		<form className=''>
			<Box heading='Inscrição' className='h-full'>
				<div className='mb-3'>
					<Input placeholder='Nome completo' icon={LuUser} />
				</div>
				<div className='mb-6'>
					<Input placeholder='E-mail' icon={LuMail} type='email' />
				</div>
				<Button type='submit'>
					Confirmar
					<LuArrowRight />
				</Button>
			</Box>
		</form>
	)
}
