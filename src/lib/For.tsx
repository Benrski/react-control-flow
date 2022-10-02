import type { ReactNode } from 'react';

export interface ForProps<T> {
  each: readonly T[] | undefined | null | false;
  fallback?: ReactNode;
  children: (item: T, index: number) => ReactNode;
}

export function For<T>({ each, children, fallback }: ForProps<T>) {
  if (each && each.length) {
    return <>{each.map(children)}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  return null;
}
