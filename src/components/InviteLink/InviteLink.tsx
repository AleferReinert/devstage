'use client'
import { useState } from 'react'
import { LuCheckCheck, LuCopy, LuLink } from 'react-icons/lu'
import { Button } from '../Button/Button'

interface InviteLinkProps {
	url: string
}
export function InviteLink({ url }: InviteLinkProps) {
	const [copied, setCopied] = useState(false)
	const copyToClipboard = () => {
		navigator.clipboard.writeText(url)
		setCopied(true)

		setTimeout(() => {
			setCopied(false)
		}, 4000)
	}

	return (
		<div
			data-testid='InviteLinkComponent'
			className={`bg-gray-800 border border-gray-600 rounded p-2 grid grid-cols-[min-content_1fr_min-content] items-center`}
		>
			<span className='[&_svg]:size-5 ml-2 text-gray-100'>
				{copied ? <LuCheckCheck className='text-blue' /> : <LuLink />}
			</span>

			<p className='text-gray-100 px-2 overflow-hidden text-ellipsis whitespace-nowrap'>
				{copied ? 'Link copiado' : url}
			</p>

			<Button
				theme='icon'
				title='Copiar link'
				onClick={copyToClipboard}
				className={copied ? 'opacity-0 pointer-events-none' : ''}
			>
				<LuCopy size={20} />
			</Button>
		</div>
	)
}
