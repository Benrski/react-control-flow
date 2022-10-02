import type { ReactNode } from 'react';

export interface ForProps<T> {
  each: readonly T[] | undefined | null | false;
  children: (item: T, index: number, items: readonly T[]) => ReactNode;
  fallback?: ReactNode;
}

export function For<T>(props: ForProps<T>) {
  const { each, children, fallback } = props;

  if (each && each.length) {
    return <>{each.map(children)}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  return null;
}
