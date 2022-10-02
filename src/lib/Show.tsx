import type { ReactNode } from 'react';

export interface ShowProps<T> {
  when: T | undefined | null | false;
  children: ReactNode | ((item: NonNullable<T>) => ReactNode);
  fallback?: ReactNode;
}

export function Show<T>(props: ShowProps<T>) {
  const { when, children, fallback } = props;

  if (when) {
    return <>{typeof children === 'function' ? children(when) : children}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  return null;
}
