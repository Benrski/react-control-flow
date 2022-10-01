import type { ReactElement, ReactNode } from 'react';

export interface ShowProps<T> {
  when: T | undefined | null | false;
  fallback?: ReactNode;
  children: ReactNode | ((item: NonNullable<T>) => ReactNode);
}

export function Show<T>({
  when,
  children,
  fallback,
}: ShowProps<T>): ReactElement | null {
  if (when) {
    return <>{typeof children === 'function' ? children(when) : children}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  return null;
}
