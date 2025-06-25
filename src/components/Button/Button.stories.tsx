import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { LuCopy } from 'react-icons/lu'
import { Button } from './Button'

const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered'
	}
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Default'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')

		await step('Verify children text', () => {
			expect(button).toHaveTextContent('Default')
		})
	}
}

export const IconTheme: Story = {
	args: {
		children: <LuCopy role='img' title='Copiar' />,
		theme: 'icon'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')
		const icon = canvas.getByRole('img')

		await step('Verify button size', () => {
			expect(button).toHaveClass('size-8')
		})

		await step('Verify chidlren icon', () => {
			expect(icon).toBeVisible()
		})
	}
}

