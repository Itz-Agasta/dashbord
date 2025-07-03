import "./globals.css";
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<AppSidebar />
					<main className="w-full">
						<Navbar />
						<div className="px-4">{children}</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
