import "./globals.css";
import { cookies } from "next/headers";
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SidebarProvider defaultOpen={defaultOpen}>
						<AppSidebar />
						<main className="w-full">
							<Navbar />
							<div className="px-4">{children}</div>
						</main>
					</SidebarProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
