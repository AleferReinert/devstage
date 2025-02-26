import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, within } from '@storybook/test'
import { InviteLink } from './InviteLink'

const meta = {
	title: 'Components/InviteLink',
	component: InviteLink,
	args: {
		url: 'https://example.com/0123456789'
	}
} satisfies Meta<typeof InviteLink>

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
			const mockWriteText = fn()
			navigator.clipboard.writeText = mockWriteText
			await userEvent.click(buttonCopy)
			expect(mockWriteText).toHaveBeenCalledWith('https://example.com/0123456789')
		})
	}
}
