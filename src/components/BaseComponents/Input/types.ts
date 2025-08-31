import type { ReactNode } from 'react';

export interface Props {
  children?: ReactNode;
  name?: string;
  type?: string;
  placeholder?: string;
  className?: string;
}
