import React from 'react';
import { Textarea, Wrapper } from './FormField.styles';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  value?: string;
  name: string;
  isTextArea?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormField = React.forwardRef<any, FormFieldProps>(({ id, label, type = 'text', value, name, onChange, isTextArea, ...props }, ref) => {
  return (
    <div>
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        {isTextArea ? (
          <Textarea id={id} value={value} name={name} onChange={onChange} {...props} ref={ref} />
        ) : (
          <Input id={id} type={type} value={value} name={name} onChange={onChange} {...props} ref={ref} />
        )}
      </Wrapper>
    </div>
  );
});
export default FormField;
