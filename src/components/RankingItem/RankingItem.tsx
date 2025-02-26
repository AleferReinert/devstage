import Image from 'next/image'
import { Box } from '../Box/Box'

interface RankingItemProps {
	position: number
	name: string
	indications: number
	badge: boolean
}
export function RankingItem({ position, name, indications, badge }: RankingItemProps) {
	return (
		<Box data-testid='RankingItemComponent' className='py-6 px-7 relative flex justify-between gap-7 items-center'>
			<div>
				<h3 className='text-gray-300 !font-sans mb-2 !font-normal'>
					<span className='font-bold'>{position}º</span> | {name}
				</h3>
				<div className='flex gap-3 items-center'>
					<p className='font-heading font-semibold text-2xl text-gray-200'>{indications}</p>
					{badge && (
						<span className='bg-gray-500 text-gray-300 rounded-sm px-3 inline-block text-xs font-semibold leading-7'>
							Você
						</span>
					)}
				</div>
			</div>
			<Image
				alt={position.toString()}
				src={`/medal-${position}.svg`}
				className='relative -mt-6'
				width={56}
				height={86}
			/>
		</Box>
	)
}
