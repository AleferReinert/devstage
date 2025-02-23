import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/logo.svg'

export function Logo() {
	return (
		<Link href='/'>
			<Image src={logo} alt='DevStage' className='h-6 md:h-[1.875rem]' />
		</Link>
	)
}
