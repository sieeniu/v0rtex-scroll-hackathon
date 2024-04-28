'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { type PropsWithChildren } from 'react';

import { DialogContent, DialogOverlay, DialogTitle } from './atoms';

type DialogProps = PropsWithChildren & {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
};

export const Dialog = ({
  isOpen,
  onClose,
  title,
  description,
  children,
}: DialogProps) => {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>{title}</DialogTitle>
          {description}
          {children}
        </DialogContent>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
