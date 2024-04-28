import { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';

import { useDelayedTask } from '@/hooks';

import { IconContainer, InputWrapper, PrimitiveInput } from './atoms';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  leftIcon?: ReactNode;
  delayed?: boolean;
};

export const Input = ({
  leftIcon,
  placeholder,
  delayed,
  onChange,
}: InputProps) => {
  const delayedTask = useDelayedTask();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;

    if (delayed) {
      delayedTask.start(() => onChange(e));
    } else {
      onChange(e);
    }
  };

  return (
    <InputWrapper>
      {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
      <PrimitiveInput placeholder={placeholder} onChange={handleChange} />
    </InputWrapper>
  );
};
