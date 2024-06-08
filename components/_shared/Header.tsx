'use client';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import { getPublicUrlFromBrowserClient, getPublicUrlFromServerClient } from '@/utils/getPublicUrlFromStorage';

import { type User as UserType } from '@supabase/supabase-js';
import { Home, ArrowRight, Grid, User, HelpCircle, CreditCard, DollarSign, LogOut, LogIn } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header({ profile }: { profile: Profile | null }) {
  const router = useRouter();
  const handleLoginLogout = async () => {
    if (profile) {
      // logout
      await fetch('/api/auth/signout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      // login
      router.push('/login');
    }
  };
  return (
    <header className="flex w-full flex-col gap-3 bg-white/95 p-3 backdrop-blur supports-[backdrop-filter]:bg-white/60 md:h-12 md:flex-row md:items-center lg:px-4">
      <div className="flex w-full items-center gap-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="rounded focus:outline-0 focus:ring-0 focus-visible:bg-zinc-200">
            <span className="sr-only">Home</span>
            <h1 className="font-bold">Eureka</h1>
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <Button className="h-8 rounded-2xl" asChild>
            <Link href="/">
              <span className="hidden sm:inline">ページを作成</span>
              <span className="sm:hidden">New</span>
            </Link>
          </Button>
          <NavigationMenu className="pr-4">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={profile && profile.avatar_img ? getPublicUrlFromBrowserClient('avatars', profile.avatar_img) : ''}
                      alt="profile"
                    />
                    <AvatarFallback>
                      <span className="sr-only">Avatar Fallback</span>
                      <svg className="h-full w-full" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </AvatarFallback>
                  </Avatar>
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  style={{
                    zIndex: 1000,
                  }}
                  className="max-h-[80vh] w-[360px] md:max-h-[calc(100vh-64px)]"
                >
                  <div className="p-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/explore"
                        className="relative flex flex select-none items-center items-center gap-3 rounded-md px-2 py-2.5 text-sm outline-none transition-colors focus:bg-zinc-100"
                      >
                        <Grid className="h-4 w-4 text-gray-600" />
                        <span>Explore</span>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href={profile ? '/profile' : '/login'}
                        className="relative flex flex select-none items-center items-center gap-3 rounded-md px-2 py-2.5 text-sm outline-none transition-colors focus:bg-zinc-100"
                        data-id="menu-profile"
                      >
                        <User className="h-4 w-4 text-gray-600" />
                        <span>Profile</span>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/faq"
                        className="relative flex flex select-none items-center items-center gap-3 rounded-md px-2 py-2.5 text-sm outline-none transition-colors focus:bg-zinc-100"
                      >
                        <HelpCircle className="h-4 w-4 text-gray-600" />
                        <span>FAQs</span>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                  <div role="separator" className="bg-geist-alpha-400 h-px" />
                  <div className="p-2">
                    <button
                      className="relative flex flex w-full select-none items-center items-center gap-3 rounded-md px-2 py-2.5 text-sm outline-none transition-colors focus:bg-zinc-100"
                      onClick={handleLoginLogout}
                    >
                      {profile ? (
                        <>
                          <LogOut className="h-4 w-4 text-gray-600" />
                          <span>Logout</span>
                        </>
                      ) : (
                        <>
                          <LogIn className="h-4 w-4 text-gray-600" />
                          <span>Login</span>
                        </>
                      )}
                    </button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuIndicator />
            </NavigationMenuList>
            <NavigationMenuViewport />
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
