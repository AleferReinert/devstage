import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Logo } from './Logo'

const meta = {
	title: 'Components/Logo',
	component: Logo,
	parameters: {
		layout: 'centered'
	}
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const image = canvas.getByRole('img')

		await step('Verify image visibility with alt', () => {
			expect(image).toBeVisible()
			expect(image).toHaveAttribute('alt', 'DevStage')
		})
	}
}

