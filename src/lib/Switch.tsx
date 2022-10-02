import type { ReactNode } from 'react';
import { Children, isValidElement } from 'react';

export interface MatchProps<T> {
  when: T | undefined | null | false;
  children: ReactNode | ((item: NonNullable<T>) => ReactNode);
}

export function Match<T>(props: MatchProps<T>) {
  const { when, children } = props;

  if (when) {
    return <>{typeof children === 'function' ? children(when) : children}</>;
  }

  return null;
}

export interface SwitchProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function Switch(props: SwitchProps) {
  const { children, fallback } = props;

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
