/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Controller, useFormContext } from 'react-hook-form';
import { Label } from '@/components/ui/label';

type TOption = {
  label: string;
  value: string;
};

type TSelectProps = {
  name: string;
  label?: string;
  placeholder?: string;
  options: TOption[];
  disabled?: boolean;
  className?: string;
  required?: boolean;
  validationRules?: any;
};

const SelectField = ({
  name,
  label,
  placeholder,
  options,
  disabled = false,
  className,
  required = false,
  validationRules,
}: TSelectProps) => {
  const { control } = useFormContext();

  const rules = {
    ...validationRules,
    ...(required &&
      !validationRules?.required && {
      required: 'এই ফিল্ডটি আবশ্যক',
    }),
  };

  return (
    <div className="space-y-1 w-full">
      {label && (
        <Label htmlFor={name}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
      )}

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <Select onValueChange={field.onChange} defaultValue={field.value} disabled={disabled}>
              <SelectTrigger
                className={`
                p-3 border ${error ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg shadow-sm bg-[#f8feff] focus:ring-2 focus:ring-[#1FAFBE] focus:border-transparent outline-none transition-all duration-200 ${className}
              `}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {error && <p className="text-red-600 text-sm font-medium mt-1">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default SelectField;
