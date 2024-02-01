"use client";

import {
  ComponentPropsWithoutRef,
  createContext,
  ReactNode,
  useState,
} from "react";
import {
  Bars3Icon,
  ClipboardIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

import { cn } from "@/lib/utils";

export const SidebarContext = createContext(true);

type SidebarProps = { children: ReactNode } & ComponentPropsWithoutRef<"aside">;

export default function Sidebar({
  children,
  className,
  ...rest
}: SidebarProps) {
  const [expanded, setExpanded] = useState<boolean>(true);
  const expandedLogoClass = expanded ? "w-32" : "w-0";
  const expandedFooterClass = expanded ? "w-52 ml-3" : "w-0";
  const logoIconClassName = cn([
    "overflow-hidden transition-all",
    expandedLogoClass,
  ]);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <aside className={cn(["h-screen overflow-y-auto", className])} {...rest}>
      <nav className="flex h-full flex-col border-r bg-white shadow-sm">
        {/* Sidebar Brand */}
        <div id="logo" className="flex items-center justify-between p-4 pb-2">
          <CurrencyDollarIcon
            className={cn(["w-32 text-gray-600", logoIconClassName])}
          />
          {/* Logo Image */}
          <button
            onClick={() => setExpanded((current) => !current)}
            type="button"
            aria-label="logo"
            className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
          >
            <Bars3Icon className="w-12" />
          </button>
        </div>

        {/* Sidebar Items */}
        <SidebarContext.Provider value={expanded}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        {/* Sidebar Footer */}
        <div className="flex border-t p-3">
          <ClipboardIcon className="w-12" />
          <div
            className={cn([
              "flex items-center justify-between overflow-hidden transition-all",
              expandedFooterClass,
            ])}
          >
            <div className="leading-5">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
