import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { LuMail } from 'react-icons/lu'
import { Input } from './Input'

const meta = {
	title: 'Components/Input',
	component: Input,
	args: {
		icon: LuMail,
		placeholder: 'Your e-mail'
	},
	parameters: {
		layout: 'centered'
	}
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Verify placeholder', () => {
			const input = canvas.getByPlaceholderText('Your e-mail')
			expect(input).toHaveAttribute('placeholder', 'Your e-mail')
		})

		await step('Verify icon visibility', () => {
			const icon = canvas.getByRole('img', { hidden: true })
			expect(icon).toBeVisible()
		})
	}
}

export const WithError: Story = {
	args: {
		error: 'Error message'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Verify container has border color danger', () => {
			const container = canvas.getByTestId('input-container')
			expect(container).toHaveClass('border-danger')
		})

		await step('Verify icon has color danger', () => {
			const icon = canvas.getByRole('img', { hidden: true })
			expect(icon).toHaveClass('text-danger')
		})

		await step('Verify input has text color danger', () => {
			const input = canvas.getByPlaceholderText('Your e-mail')
			expect(input).toHaveClass('text-danger')
		})

		await step('Verify error message visibility', () => {
			const error = canvas.getByText('Error message')
			expect(error).toBeVisible()
		})
	}
}

