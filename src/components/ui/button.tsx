import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    className = '',
    disabled,
    ...props
}) => {
    const baseClasses = 'rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200';

    const variantClasses = {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
        secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-400',
        outline: 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-gray-400',
        ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-400',
    };

    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    const loadingClasses = isLoading ? 'opacity-80 cursor-not-allowed' : '';
    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

    return (
        <motion.button
            whileHover={{ scale: disabled || isLoading ? 1 : 1.03 }}
            whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${loadingClasses} ${disabledClasses} ${className}`}
            disabled={disabled || isLoading}
            {...props}
            onAnimationStart={undefined}
            onDragStart={undefined}
            onDragEnd={undefined}
            onDrag={undefined}
        >
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                </div>
            ) : (
                children
            )}
        </motion.button>
    );
};
