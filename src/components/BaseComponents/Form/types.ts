import type { ReactNode } from 'react';

export interface Props {
  method: string;
  children?: ReactNode;
  action?: string;
  className?: string;
}
