import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Container } from './Container'

const meta = {
	title: 'Container',
	component: Container
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'children with bg to view dimensions'
	},
	decorators: [
		Story => (
			<div className='bg-blue text-center'>
				<Story />
			</div>
		)
	],
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Verify children', () => {
			expect(canvas).toHaveTextContent('children')
		})
	}
}

