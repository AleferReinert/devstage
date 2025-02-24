import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import Home from './page'

const meta = {
	title: 'Pages/Home',
	component: Home
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Verify Logo component', () => {
			const logoComponent = canvas.getByTestId('LogoComponent')
			expect(logoComponent).toBeVisible()
		})

		await step('Verify heading', () => {
			const heading = canvas.getByRole('heading', { level: 1, name: 'CodeCraft Summit 2025' })
			expect(heading).toBeVisible()
		})

		await step('Verify AboutEvent component', () => {
			const aboutEventComponent = canvas.getByTestId('AboutEventComponent')
			expect(aboutEventComponent).toBeVisible()
		})

		await step('Verify RegistrationForm component', () => {
			const registrationFormComponent = canvas.getByTestId('RegistrationFormComponent')
			expect(registrationFormComponent).toBeVisible()
		})
	}
}
