import { cloneElement, MouseEventHandler } from 'react';
import { IconSvg, IconDefinition } from './Icon.generated';
export * from './Icon.generated';

export interface IconProps {
  icon?: IconDefinition;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: MouseEventHandler<SVGElement> | undefined;
}

export function Icon(props: IconProps) {
  if (!props.icon || !IconSvg[props.icon]) {
    return null;
  }

  const icon = cloneElement(IconSvg[props.icon], {
    style: props.style,
    onClick: props.onClick,
    className: props.className,
    ...(props.alt
      ? {
          children: [<title key="title">{props.alt}</title>, IconSvg[props.icon].props.children],
        }
      : {}),
  });

  return icon;
}
