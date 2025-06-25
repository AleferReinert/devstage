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
			<div className='w-2xs'>
				<Story />
			</div>
		)
	],
	parameters: {
		layout: 'centered'
	}
} satisfies Meta<typeof StatCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Icon', () => {
			const icon = canvas.getByRole('img', { hidden: true })
			expect(icon).toBeVisible()
		})

		await step('Title', () => {
			const title = canvas.getByRole('heading', { level: 3 })
			expect(title).toHaveTextContent('Acessos ao link')
		})

		await step('Value', () => {
			const value = canvas.getByRole('paragraph')
			expect(value).toHaveTextContent('942')
		})
	}
}
