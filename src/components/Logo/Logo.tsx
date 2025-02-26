import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/logo.svg'

export function Logo() {
	return (
		<Link href='/' className='inline-block focus:outline-none' data-testid='LogoComponent' title='Página inicial'>
			<Image src={logo} alt='DevStage' className='h-6 sm:h-[1.875rem] w-auto' width={logo.width} height={logo.height} />
		</Link>
	)
}
