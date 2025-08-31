import type { ReactNode } from 'react';

export interface Props {
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
}
