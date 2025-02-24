import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { LuMousePointerClick } from 'react-icons/lu'
import { StatCard } from './StatCard'

const meta = {
	title: 'Components/StatCard',
	component: StatCard,
	args: {
		title: 'Acessos ao link',
		value: '942',
		icon: LuMousePointerClick
	},
	decorators: [
		Story => (
			<div className='text-center text-gray-100'>
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof StatCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Verify icon', () => {
			const icon = canvas.getByRole('img')
			expect(icon).toBeVisible()
		})

		await step('Verify title', () => {
			const title = canvas.getByRole('heading', { level: 3 })
			expect(title).toHaveTextContent('Acessos ao link')
		})

		await step('Verify value', () => {
			const value = canvas.getByRole('paragraph')
			expect(value).toHaveTextContent('942')
		})
	}
}
