import React, { forwardRef } from 'react';

export const cls = (input) =>
  input
    .replace(/\s+/gm, " ")
    .split(" ")
    .filter((cond) => typeof cond === "string")
    .join(" ")
    .trim();

const classes = {
  base: 'focus:outline-none transition ease-in-out duration-300',
  disabled: 'opacity-50 cursor-not-allowed',
  pill: 'rounded-full',
  size: {
    small: 'px-2 py-1 text-sm',
    normal: 'px-4 py-2',
    large: 'px-20 py-3 text-lg'
  },
  variant: {
    primary: 'bg-hard-blue text-white font-semibold border border-sky-500 rounded-3xl',
    secondary: 'bg-white border border-blue-500 font-semibold rounded-3xl text-hard-blue',
    live: 'bg-live border border-live-500 font-semibold rounded-3xl text-white'
  }
}

const Button = forwardRef(
  (
    {
      children,
      type = 'button',
      variant = 'basic',
      size = 'normal',
      pill,
      disabled = false,
      paddingX,
      ...props
    }, ref
  ) => (
    <button
      ref={ref}
      disabled={disabled}
      type={type}
      className={cls(`
                ${classes.base}
                ${classes.size[size]}
                ${classes.variant[variant]}
                ${pill && classes.pill}
                ${disabled && classes.disabled}
            `)}
      {...props}
    >
      {children}
    </button>
  ));

export default Button