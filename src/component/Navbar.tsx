"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/component/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={'/'}>
                    <MenuItem  setActive={setActive} active={active} item="Home">

                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/courses">Guitar for Beginners</HoveredLink>
                        <HoveredLink href="/courses">Music Theory Fundamentals</HoveredLink>
                        <HoveredLink href="/courses">Vocal Training and Performance</HoveredLink>
                        <HoveredLink href="/courses">Music Production with Ableton Live</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={'/contact'}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">

                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar
