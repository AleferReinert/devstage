import type { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
	theme?: 'default' | 'icon'
	children: ReactNode
}
export function Button({ theme = 'default', children, className, ...rest }: ButtonProps) {
	const baseStyles =
		'cursor-pointer bg-gray-500 flex items-center text-blue transition duration-300 ease-out hover:bg-blue hover:text-gray-900 focus:outline-none'
	const themes = {
		default: 'w-full gap-4 px-5 font-semibold rounded h-12 justify-between [&_svg]:size-6',
		icon: 'rounded-sm size-8 justify-center [&_svg]:size-5'
	}

	return (
		<button {...rest} className={`${baseStyles} ${themes[theme]} ${className}`}>
			{children}
		</button>
	)
}
