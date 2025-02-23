import type { ReactNode } from 'react'

interface ContainerProps {
	children: ReactNode
}
export function Container({ children }: ContainerProps) {
	return <div className='px-4 mx-auto w-full max-w-[1126px]'>{children}</div>
}
