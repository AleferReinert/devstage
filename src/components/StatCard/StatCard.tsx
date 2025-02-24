import type { ComponentProps } from 'react'
import type { IconType } from 'react-icons'
import { Box } from '../Box/Box'

interface StatCardProps extends ComponentProps<'div'> {
	title: string
	value: string
	icon: IconType
}
export function StatCard({ title, value, icon }: StatCardProps) {
	const Icon = icon

	return (
		<Box className='text-center relative flex flex-col-reverse'>
			<Icon size={20} role='img' className='text-purple absolute top-3 left-3' />
			<h3 className='text-gray-300 text-sm'>{title}</h3>
			<p className='text-gray-200 font-heading text-2xl font-semibold'>{value}</p>
		</Box>
	)
}
