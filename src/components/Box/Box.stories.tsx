import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Box } from './Box'

const meta = {
	title: 'Components/Box',
	component: Box,
	args: {
		children: 'children'
	},
	decorators: [
		Story => (
			<div className='text-center text-gray-100'>
				<Story />
			</div>
		)
	]
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

		await step('Verify heading is hidden', () => {
			const heading = canvas.queryByRole('heading', { level: 2 })
			expect(heading).not.toBeInTheDocument()
		})
	}
}

export const Heading: Story = {
	args: {
		heading: 'Custom heading'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Verify custom heading', () => {
			const heading = canvas.getByRole('heading', { level: 2 })
			expect(heading).toHaveTextContent('Custom heading')
		})
	}
}
