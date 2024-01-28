import { FC, PropsWithoutRef, RefAttributes, SVGProps } from 'react';

type IconSVGProps = PropsWithoutRef<SVGProps<SVGSVGElement>> &
  RefAttributes<SVGSVGElement>;
type IconProps = IconSVGProps & {
  title?: string;
  titleId?: string;
};

export declare type HeroIcon = FC<IconProps>;
