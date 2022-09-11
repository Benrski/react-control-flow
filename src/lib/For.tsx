import type { ReactNode } from 'react';

export interface ForProps<T, U extends ReactNode> {
  each: readonly T[] | undefined | null | false;
  fallback?: ReactNode;
  children: (item: T, index: number) => U;
}

export function For<T, U extends ReactNode>({
  each,
  children,
  fallback,
}: ForProps<T, U>) {
  if (each && each.length) {
    return <>{each.map(children)}</>;
  }

  return <>{fallback}</>;
}
