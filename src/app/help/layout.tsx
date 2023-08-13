import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HelpPageFooter from "src/components/Help Page/Footer";
import HelpPageHeader from "src/components/Help Page/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Get Help",
	description: "Stuck? Search our knowledge base!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<HelpPageHeader />
				{children} 
                <HelpPageFooter />
			</body>
		</html>
	);
}
