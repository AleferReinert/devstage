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
	title: 'devStage'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={`${oxanium.variable} ${montserrat.variable}`}>
			<body className='bg-gray-900 text-gray-100 antialiased bg-[url("/background.webp")] bg-no-repeat bg-top py-8 lg:py-10'>
				{children}
			</body>
		</html>
	)
}

