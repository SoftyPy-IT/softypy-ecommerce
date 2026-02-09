'use client';
import { useState } from 'react';
import { Controller, useFormContext, RegisterOptions } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import clsx from 'clsx';

interface TextInputFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  rules?: RegisterOptions;
}

const TextInputField = ({
  name,
  label,
  placeholder,
  type = 'text',
  disabled = false,
  required = false,
  className,
  rules,
}: TextInputFieldProps) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const finalRules: RegisterOptions = {
    ...rules,
    ...(required && !rules?.required && {
      required: 'এই ফিল্ডটি আবশ্যক',
    }),
  };

  const isPassword = type === 'password';

  return (
    <div className="w-full space-y-1 relative">
      {label && (
        <Label htmlFor={name} className="font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
      )}

      <Controller
        name={name}
        control={control}
        rules={finalRules}
        render={({ field, fieldState: { error } }) => (
          <>
            <div className="relative">
              <Input
                {...field}
                id={name}
                type={isPassword && showPassword ? 'text' : type}
                placeholder={placeholder}
                disabled={disabled}
                className={clsx(
                  'p-3 rounded-lg bg-[#f8feff] transition-all w-full',
                  'focus:ring-2 focus:ring-[#1FAFBE] focus:border-transparent',
                  error ? 'border-red-500' : 'border-gray-300',
                  isPassword && 'pr-10', // space for icon
                  className
                )}
              />

              {/* Show/Hide Password Icon */}
              {isPassword && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              )}
            </div>

            {error && (
              <p className="text-sm text-red-600 font-medium mt-1">
                {error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default TextInputField;
