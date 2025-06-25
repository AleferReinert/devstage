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
	title: 'devStage - CodeCraft Summit 2025',
	description:
		'Um evento feito por e para pessoas desenvolvedoras apaixonadas por criar soluções inovadoras e compartilhar conhecimento. '
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

