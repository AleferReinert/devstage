import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { ConfirmationPage } from './page'

const meta = {
	title: 'Pages/Inscrição Confirmada',
	component: ConfirmationPage,
	tags: ['!autodocs'],
	parameters: {
		nextjs: {
			appDirectory: true
		}
	},
	args: {
		inviteUrl: `https://mocked-url.com/invites/123456`,
		ranking: [
			{ name: 'John Doe', score: 34 },
			{ name: 'Mike Smith', score: 20 },
			{ name: 'Bob Johnson', score: 7 }
		],
		totalClicks: 50,
		totalSubscribers: 20,
		position: 2
	}
} satisfies Meta<typeof ConfirmationPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Inscrição Confirmada',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Verify Logo component', () => {
			const logoComponent = canvas.getByTestId('LogoComponent')
			expect(logoComponent).toBeVisible()
		})

		await step('Verify heading', () => {
			const heading = canvas.getByRole('heading', { level: 1, name: 'Inscrição confirmada!' })
			expect(heading).toBeVisible()
		})

		await step('Verify InviteLink component', () => {
			const linkCopyComponent = canvas.getByTestId('InviteLinkComponent')
			expect(linkCopyComponent).toBeVisible()
		})

		await step('Verify 3 StatCard components', () => {
			const statCardComponents = canvas.getAllByTestId('StatCardComponent')
			expect(statCardComponents.length).toBe(3)
		})

		await step('Verify 3 RankingItem components', () => {
			const rankingItemComponents = canvas.getAllByTestId('RankingItemComponent')
			expect(rankingItemComponents.length).toBe(3)
		})
	}
}
