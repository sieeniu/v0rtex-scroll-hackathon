import { type PropsWithChildren, type ReactElement } from "react";
import { PrimitiveButton } from "./atoms";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactElement;
};

const Button = ({
  children,
  icon,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <PrimitiveButton {...props}>
      {icon && icon}
      {children}
    </PrimitiveButton>
  );
};

Button.displayName = "Button";

export { Button };
