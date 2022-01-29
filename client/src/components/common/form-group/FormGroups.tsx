import { FormGroupContainer, Input, Label } from "./FormGroupElements";

interface FormGroupPropsT {
  type: string;
  id: string;
  placeholder: string;
  required?: boolean;
  labelText: string;
  value: string | number | readonly string[] | undefined;
  minLength?: number;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const FormGroup = (props: FormGroupPropsT) => {
  return (
    <FormGroupContainer>
      <Label htmlFor={props.id}>{props.labelText}:</Label>
      <Input
        required={props.required}
        id={props.id}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        minLength={props.minLength}
      />
    </FormGroupContainer>
  );
};

export default FormGroup;
