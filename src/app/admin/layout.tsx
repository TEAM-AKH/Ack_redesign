
'use client';

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
  SidebarInset,
} from '@/components/ui/sidebar';
import {
  Home,
  Briefcase,
  ShoppingBag,
  Calendar,
  LogOut,
  Settings,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/logo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: <Home /> },
  { href: '/admin/services', label: 'Services', icon: <Briefcase /> },
  { href: '/admin/products', label: 'Products', icon: <ShoppingBag /> },
  { href: '/admin/events', label: 'Events', icon: <Calendar /> },
];

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isMobile } = useSidebar();

  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">
      <Sidebar>
        <SidebarContent>
          <SidebarHeader>
            <Logo />
          </SidebarHeader>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href}>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    icon={item.icon}
                    tooltip={item.label}
                    asChild={false} 
                  >
                    {item.label}
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
               <SidebarMenuItem>
                  <SidebarMenuButton icon={<Settings />} tooltip="Settings">
                      Settings
                  </SidebarMenuButton>
               </SidebarMenuItem>
               <SidebarMenuItem>
                  <SidebarMenuButton icon={<LogOut />} tooltip="Logout">
                      Logout
                  </SidebarMenuButton>
               </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
          <header className="flex h-14 items-center justify-between gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
              <div className="flex items-center gap-4">
                  {isMobile && <SidebarTrigger />}
                  <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
              </div>
              <div className="flex items-center gap-4">
                  <Avatar>
                      <AvatarImage src="https://picsum.photos/seed/admin/40/40" />
                      <AvatarFallback>A</AvatarFallback>
                  </Avatar>
              </div>
          </header>
          <main className="flex-1 p-4 md:p-6">{children}</main>
      </SidebarInset>
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </SidebarProvider>
  );
}
