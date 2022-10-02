import type { ReactNode } from 'react';
import { Children, isValidElement } from 'react';

export interface MatchProps<T> {
  when: T | undefined | null | false;
  children: ReactNode | ((item: NonNullable<T>) => ReactNode);
}

export function Match<T>({ when, children }: MatchProps<T>) {
  if (when) {
    return <>{typeof children === 'function' ? children(when) : children}</>;
  }

  return null;
}

export interface SwitchProps {
  fallback?: ReactNode;
  children: ReactNode;
}

export function Switch({ children, fallback }: SwitchProps) {
  const match = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === Match && child.props.when
  );

  if (match) {
    return <>{match}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  return null;
}

Switch.Match = Match;
