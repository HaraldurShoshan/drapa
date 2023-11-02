import Header from '@/components/header';
import Logo from '@/components/logo';
import MemberPictures from '@/components/member-pictures';

export default function Home() {
	return (
		<main className="flex flex-col items-center px-4 h-[5000px]">
			<Logo />
			<MemberPictures />
		</main>
	);
}
