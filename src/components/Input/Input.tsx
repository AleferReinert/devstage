import type { ComponentProps } from 'react'
import type { IconType } from 'react-icons'

interface InputProps extends ComponentProps<'input'> {
	icon: IconType
	error?: string
	placeholder: string
}
export function Input({ icon, error, ...rest }: InputProps) {
	const Icon = icon
	const styles = {
		container: `
			${error ? 'border-danger' : 'border-gray-600 focus-within:border-gray-100'} 
			h-12 bg-gray-800 rounded border px-4 grid grid-cols-[min-content_1fr] items-center gap-2 transition 
		`,
		icon: `
			${
				error
					? 'text-danger'
					: 'text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100'
			}
			transition 
			`,
		input: `
			${error ? 'text-danger' : 'text-gray-300 focus:text-gray-100'}
			transition h-full focus:outline-none peer
		`
	}

	return (
		<div className='group'>
			<div className={styles.container} data-testid='input-container'>
				<Icon aria-hidden size={20} className={styles.icon} role='img' />
				<input type='text' {...rest} className={styles.input} />
			</div>
			{error && <span className='text-danger text-xs'>{error}</span>}
		</div>
	)
}
