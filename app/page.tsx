import Contact from '@/components/contact';
import Header from '@/components/header';
import Logo from '@/components/logo';
import MemberPictures from '@/components/member-pictures';
import SocialMedia from '@/components/social-media';

export default function Home() {
	return (
		<main className="flex flex-col items-center px-4">
			<Logo />
			<MemberPictures />
			<SocialMedia />
			<Contact />
		</main>
	);
}
