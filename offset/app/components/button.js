import Link from 'next/link';
import clsx from 'clsx';

export default function Button({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  disabled = false,
  type = 'button',
}) {
  const baseClasses =
    'inline-flex items-center justify-center px-4 py-2 rounded-xl text-m font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300 focus:ring-gray-400',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400',
    text: 'font-bold text-white hover:text-grey'
  };

  const classes = clsx(
    baseClasses,
    variants[variant],
    className,
    disabled && 'opacity-50 pointer-events-none'
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
