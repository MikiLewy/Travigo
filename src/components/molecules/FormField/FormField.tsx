import React from 'react';
import { Wrapper } from './FormField.styles';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  value?: string;
  name: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ id, label, type, value, name, onChange }) => {
  return (
    <div>
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} type={type} value={value} name={name} onChange={onChange} />
      </Wrapper>
    </div>
  );
};

export default FormField;
