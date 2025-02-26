import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { RegistrationForm } from './RegistrationForm'

const meta = {
	title: 'Components/RegistrationForm',
	component: RegistrationForm,
	parameters: {
		nextjs: {
			appDirectory: true
		}
	}
} satisfies Meta<typeof RegistrationForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Verify heading', () => {
			const heading = canvas.getByRole('heading', { level: 2 })
			expect(heading).toHaveTextContent('Inscrição')
		})

		await step('Verify input full name', () => {
			const inputName = canvas.getByPlaceholderText('Nome completo')
			expect(inputName).toHaveAttribute('type', 'text')
		})

		await step('Verify input email', () => {
			const inputEmail = canvas.getByPlaceholderText('E-mail')
			expect(inputEmail).toHaveAttribute('type', 'email')
		})

		await step('Verify button submit', () => {
			const buttonSubmit = canvas.getByRole('button', { name: 'Confirmar' })
			expect(buttonSubmit).toHaveAttribute('type', 'submit')
		})
	}
}
