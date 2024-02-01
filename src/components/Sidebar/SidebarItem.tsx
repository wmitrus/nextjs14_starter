'use client';

import { ComponentPropsWithoutRef, ReactNode, useContext } from 'react';

import { cn } from '@/lib/utils';

import { SidebarContext } from './Sidebar';

type SidebarItemProps = {
  icon: ReactNode;
  children: string;
  active?: boolean;
  alert?: boolean;
} & ComponentPropsWithoutRef<'li'>;

export default function SidebarItem({
  icon,
  children,
  active = false,
  alert = false,
  className,
  ...rest
}: SidebarItemProps) {
  const expanded = useContext<boolean>(SidebarContext);

  const activeClass = active
    ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
    : 'hover:bg-indigo-50 text-gray-600';
  const expandedClass = expanded ? 'w-52 ml-3' : 'w-0';
  const expandedAlertClass = expanded ? '' : 'top-2';

  return (
    <li
      className={cn([
        `relative flex items-center py-2 px-3 my-1 font-medium rounded-md ` +
          `cursor-pointer transition- group ${activeClass}`,
        className,
      ])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {/* <Icon className="w-10" /> */}
      <span className="w-8">{icon}</span>

      <span className={cn(['overflow-hidden transition-all', expandedClass])}>
        {children}
      </span>
      {alert && (
        <div
          className={cn([
            'absolute right-2 w-2 h-2 rounded bg-indigo-400',
            expandedAlertClass,
          ])}
        />
      )}

      {!expanded && (
        <div
          className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100
        text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
        >
          {children}
        </div>
      )}
    </li>
  );
}
