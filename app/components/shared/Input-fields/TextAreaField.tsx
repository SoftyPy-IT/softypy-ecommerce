'use client';

import { Controller, useFormContext, RegisterOptions } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useMemo } from 'react';

interface TextAreaFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  required?: boolean;
  rules?: RegisterOptions;
}

const TextAreaField = ({
  name,
  label,
  placeholder,
  disabled = false,
  className,
  fullWidth = false,
  required = false,
  rules,
}: TextAreaFieldProps) => {
  const { control } = useFormContext();

  const finalRules = useMemo<RegisterOptions>(() => {
    if (!required) return rules ?? {};

    return {
      ...rules,
      required: rules?.required ?? 'এই ফিল্ডটি আবশ্যক',
    };
  }, [required, rules]);

  return (
    <div className={cn('space-y-1', fullWidth && 'w-full')}>
      {label && (
        <Label htmlFor={name} className="font-medium">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </Label>
      )}

      <Controller
        name={name}
        control={control}
        rules={finalRules}
        render={({ field, fieldState: { error } }) => (
          <>
            <Textarea
              {...field}
              id={name}
              placeholder={placeholder}
              disabled={disabled}
              className={cn(
                'p-3 h-28 rounded-xl resize-none bg-[#f8feff] transition-all',
                'focus:ring-2 focus:ring-[#1FAFBE] focus:border-transparent',
                error ? 'border-red-500' : 'border-gray-300',
                fullWidth ? 'w-full' : 'md:col-span-2',
                className
              )}
            />

            {error?.message && (
              <p className="text-sm font-medium text-red-600">
                {error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default TextAreaField;
