import { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-[family-name:var(--font-ibm-plex-mono)] text-sm font-medium transition-all duration-150 btn-press min-h-12 px-6';

    const variants = {
      primary:
        'bg-[var(--color-accent)] text-white border-none shadow-brutalist shadow-brutalist-hover',
      secondary:
        'bg-transparent text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
