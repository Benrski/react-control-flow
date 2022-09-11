import type { ReactNode } from 'react';

export interface ShowProps<T> {
  when: T | undefined | null | false;
  fallback?: ReactNode;
  children: ReactNode | ((item: NonNullable<T>) => ReactNode);
}

export function Show<T>({ when, children, fallback }: ShowProps<T>) {
  if (when) {
    return <>{typeof children === 'function' ? children(when) : children}</>;
  }

  return <>{fallback}</>;
}
