import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Container } from './Container'

const meta = {
	title: 'Components/Container',
	component: Container
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: <p className='text-center p-4 bg-gray-600'>children with bg to view dimensions</p>
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Verify children', () => {
			const children = canvas.getByText('children with bg to view dimensions')
			expect(children).toBeVisible()
		})
	}
}

