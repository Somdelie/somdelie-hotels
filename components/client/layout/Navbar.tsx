"use client";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { UserMenu } from "@/components/ui/auth/UserMenu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton, useAuth } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const { userId } = useAuth();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="font-semibold text-2xl text-green-500">
          Somdelie Hotels
        </Link>
        <div className="relative md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for a hotel..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
        <div className="gap-4 hidden md:flex items-center">
          <ModeToggle />
          {userId ? (
            <UserMenu />
          ) : (
            <div className="flex items-center">
              <Button onClick={() => router.push("/sign-in")}>Sign in</Button>
            </div>
          )}
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
