import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';

interface FormInputTextProps {
  name: string;
  type: 'text' | 'number';
  placeholder?: string;
  label?: string;
  required?: boolean;
  form: UseFormReturn;
}

const FormInputText: FC<FormInputTextProps> = ({
  name,
  type,
  placeholder,
  label,
  required,
  form,
}) => {
  return (
    <>
      <div className="flex flex-column">
        {label && (
          <label htmlFor={name} className="align-self-start block text-500 font-semibold mb-1">
            {label}
          </label>
        )}
        <InputText
          className="mb-2"
          type={type}
          placeholder={placeholder}
          required={required}
          {...form.register?.(name)}
        />
        {form.formState.errors[name] && (
          <small id={name + '-error'} className="p-error block mb-3 align-self-start font-semibold">
            {form.formState.errors[name]?.message as string}
          </small>
        )}
      </div>
    </>
  );
};

export default FormInputText;
