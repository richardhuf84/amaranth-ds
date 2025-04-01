import React from 'react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
  const backgroundColorMap = {
    primary: 'deeppink',
    secondary: 'rebeccapurple',
  } as const;

  return (
    <button
      style={{
        all: 'unset',
        background: backgroundColorMap[variant],
        color: 'white',
        padding: '1rem',
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
