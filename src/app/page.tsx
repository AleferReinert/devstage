import { Button } from '@/components/Button'
import { LuArrowRight, LuCopy } from 'react-icons/lu'

export default function Home() {
	return (
		<main>
			<Button>
				Label <LuArrowRight />
			</Button>
			<Button theme='icon'>
				<LuCopy />
			</Button>
		</main>
	)
}

