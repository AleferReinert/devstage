interface ButtonProps {
	children: React.ReactNode
}
export function Button({ children }: ButtonProps) {
	return <button className='p-4 bg-teal-600 text-white'>{children}</button>
}
