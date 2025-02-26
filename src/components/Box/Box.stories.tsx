import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Box } from './Box'

const meta = {
	title: 'Components/Box',
	component: Box,
	args: {
		children: <p className='text-center p-4'>children</p>
	}
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const children = canvas.getByText('children')

		await step('Verify children', () => {
			expect(children).toBeVisible()
		})
	}
}
