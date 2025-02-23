import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { AboutEvent } from './AboutEvent'

const meta = {
	title: 'AboutEvent',
	component: AboutEvent
} satisfies Meta<typeof AboutEvent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Verify heading', () => {
			const heading = canvas.getByRole('heading', { level: 2 })
			expect(heading).toHaveTextContent('Sobre o evento')
		})

		await step('Verify description', () => {
			const description = canvas.getByRole('paragraph')
			expect(description).toHaveTextContent('Um evento feito')
		})
	}
}
