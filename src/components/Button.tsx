interface ButtonProps {
	children: React.ReactNode
	theme?: 'default' | 'icon'
}
export function Button({ children, theme = 'default' }: ButtonProps) {
	const baseStyles =
		'cursor-pointer bg-gray-500 flex items-center text-blue transition duration-300 ease-out hover:bg-blue hover:text-gray-900'
	const themes = {
		default: 'gap-4 px-5 font-semibold rounded h-12 justify-between [&_svg]:size-6',
		icon: 'rounded-sm size-8 justify-center [&_svg]:size-5'
	}
	return <button className={`${baseStyles} ${themes[theme]}`}>{children}</button>
}
