import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { RankingItem } from './RankingItem'

const meta = {
	title: 'Components/RankingItem',
	component: RankingItem,
	args: {
		position: 1,
		name: 'André Souza',
		indications: 1.128
	},
	parameters: {
		layout: 'centered'
	}
} satisfies Meta<typeof RankingItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Verify position', () => {
			const position = canvas.getByText('1º')
			expect(position).toBeVisible()
		})

		await step('Verify name', () => {
			const name = canvas.getByRole('heading', { level: 3 })
			expect(name).toHaveTextContent('André Souza')
		})

		await step('Verify indications', () => {
			const indications = canvas.getByRole('paragraph')
			expect(indications).toHaveTextContent('1.128')
		})

		await step('Verify medal image', () => {
			const medalImage = canvas.getByRole('img', { name: '1' })
			expect(medalImage).toBeVisible()
		})
	}
}
