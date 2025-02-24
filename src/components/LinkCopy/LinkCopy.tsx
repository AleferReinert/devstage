'use client'
import { useRef, useState } from 'react'
import { LuCheckCheck, LuCopy, LuLink } from 'react-icons/lu'
import { Button } from '../Button/Button'

interface LinkCopyProps {
	url: string
}
export function LinkCopy({ url }: LinkCopyProps) {
	const [copied, setCopied] = useState(false)
	const textRef = useRef<HTMLParagraphElement>(null)
	const copyToClipboard = () => {
		navigator.clipboard.writeText(url)
		setCopied(true)

		// Select url
		const selection = window.getSelection()
		const range = document.createRange()
		range.selectNodeContents(textRef.current!)
		selection?.removeAllRanges()
		selection?.addRange(range)

		setTimeout(() => {
			setCopied(false)
			selection?.removeAllRanges()
		}, 2000)
	}

	return (
		<div
			data-testid='LinkCopyComponent'
			className='bg-gray-800 border border-gray-600 rounded p-2 grid grid-cols-[min-content_1fr_min-content] items-center'
		>
			<LuLink size='20' className='ml-2 text-gray-100' />
			<p ref={textRef} className='text-gray-100 px-2 overflow-hidden text-ellipsis whitespace-nowrap'>
				{url}
			</p>

			{copied ? (
				<span className='size-8 flex justify-center items-center' title='Link copiado'>
					<LuCheckCheck size={20} className='text-blue' />
				</span>
			) : (
				<Button theme='icon' title='Copiar link' onClick={copyToClipboard}>
					<LuCopy size={20} />
				</Button>
			)}
		</div>
	)
}
