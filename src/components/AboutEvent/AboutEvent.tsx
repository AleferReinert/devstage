import { LuRadio } from 'react-icons/lu'
import { Box } from '../Box/Box'

export function AboutEvent() {
	return (
		<Box
			data-testid='AboutEventComponent'
			heading={
				<>
					<span>Sobre o evento</span>
					<span className='text-purple flex items-center gap-2 text-xs'>
						<LuRadio size={20} />
						<span>AO VIVO</span>
					</span>
				</>
			}
			className='p-6 md:p-8'
		>
			<p className='text-gray-300 text-sm leading-[160%] md:text-base'>
				Um evento feito por e para pessoas desenvolvedoras apaixonadas por criar soluções inovadoras e compartilhar
				conhecimento. Vamos mergulhar nas tendências mais recentes em desenvolvimento de software, arquitetura de
				sistemas e tecnologias emergentes, com palestras, workshops e hackathons.
				<br />
				<br />
				Dias 15 a 17 de março | Das 18h às 21h
			</p>
		</Box>
	)
}
