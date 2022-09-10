import type { ReactNode } from 'react';
import { isFunction } from '../utils/isFunction';

export interface ShowProps<T> {
  when: T | undefined | null;
  fallback?: ReactNode;
  children: ReactNode | ((item: NonNullable<T>) => ReactNode);
}

export function Show<T>({ when, children, fallback }: ShowProps<T>) {
  if (when) {
    return <>{isFunction(children) ? children(when) : children}</>;
  }

  return <>{fallback}</>;
}
