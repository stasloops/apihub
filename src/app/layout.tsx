import Header from './(components)/header';
import '../styles/globals.scss';
import Providers from './(provider)/Providers';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
	weight: ['300', '400', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'optional',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={roboto.className}>
			<head />
			<body>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
