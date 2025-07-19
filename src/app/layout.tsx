import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'
import './globals.css'

const oxanium = Oxanium({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-oxanium'
})

const montserrat = Montserrat({
	weight: ['400', '600'],
	subsets: ['latin'],
	variable: '--font-montserrat'
})

export const metadata: Metadata = {
	title: 'DevStage',
	description: 'Website de inscrição e indicação para eventos.',
	authors: [{ name: `Alefer Reinert`, url: 'https://aleferreinert.vercel.app' }],
	openGraph: {
		title: 'DevStage',
		description: 'Website de inscrição e indicação para eventos.',
		url: 'https://devstage-nlw-connect.vercel.app',
		siteName: 'DevStage',
		type: 'website',
		images: [
			{
				url: '/social-share.webp',
				width: 1200,
				height: 630,
				alt: 'Visualização do site em um celular, tablet e notebook.'
			}
		]
	},
	twitter: {
		title: 'DevStage',
		description: 'Website de inscrição e indicação para eventos.',
		card: 'summary_large_image',
		images: '/social-share.webp'
	},
	alternates: {
		canonical: 'https://devstage-nlw-connect.vercel.app'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pt-BR' className={`${oxanium.variable} ${montserrat.variable}`}>
			<body>{children}</body>
		</html>
	)
}

