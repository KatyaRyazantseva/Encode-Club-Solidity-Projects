import { GiVote } from 'react-icons/gi';
import SidebarRow from './SidebarRow';

const Sidebar = () => {
	return (
		<div className='h-screen p-2 md:p-10 py-6 overflow-y-auto border-indigo-500/50'>
			<div className='flex flex-col items-center justify-center mb-10'>
				<GiVote size={40} />
				<h1 className='hidden md:inline text-center text-3xl mt-2'>Voting</h1>
				<h2 className='hidden md:inline text-center text-xs italic'>Dapp</h2>
			</div>

			<SidebarRow />
		</div>
	);
};

export default Sidebar;
