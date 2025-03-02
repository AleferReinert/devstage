import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { HomePage } from './HomePage'

const meta = {
	title: 'Pages/Início',
	component: HomePage,
	tags: ['!autodocs'],
	parameters: {
		nextjs: {
			appDirectory: true
		}
	}
} satisfies Meta<typeof HomePage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Início',
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
