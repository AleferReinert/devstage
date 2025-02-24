import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { LinkCopy } from './LinkCopy'

const meta = {
	title: 'LinkCopy',
	component: LinkCopy,
	args: {
		url: 'https://example.com/0123456789'
	}
} satisfies Meta<typeof LinkCopy>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const url = canvas.getByText('https://example.com/0123456789')
		const buttonCopy = canvas.getByRole('button', { name: 'Copiar link' })

		await step('Verify url', () => {
			expect(url).toBeVisible()
		})

		await step('Verify button copy', () => {
			expect(buttonCopy).toBeVisible()
		})

		await step('Copy url on button click', async () => {
			await userEvent.click(buttonCopy)

			expect(await navigator.clipboard.readText()).toBe('https://example.com/0123456789')
		})
	}
}
