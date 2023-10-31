import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  SelectProps,
} from '@chakra-ui/react';

type ControlledSelectProps<FormValues extends FieldValues> =
  UseControllerProps<FormValues> &
    SelectProps & {
      label?: string;
      options?: { label: string; value: string | number }[] | undefined;
      isReadOnly?: boolean;
      filterStyle?: boolean;
    };

export function ControlledSelect<FormValues extends FieldValues>({
  control,
  name,
  id,
  label,
  rules,
  options,
  filterStyle,
  ...props
}: ControlledSelectProps<FormValues>) {
  const {
    field,
    fieldState: { error },
  } = useController<FormValues>({
    name,
    control,
    rules,
  });

  if (props.defaultValue && typeof field.value === 'object') {
    field.value = props.defaultValue;
  }

  return (
    <FormControl
      isInvalid={!!error}
      id={id}
      cursor="pointer"
      userSelect="none"
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      {label && <FormLabel cursor="pointer">{label}</FormLabel>}
      <Select
        role="listbox"
        {...props}
        {...field}
        border={filterStyle ? 'none' : '1px solid'}
        borderRadius={'20px'}
        fontWeight="normal"
        disabled={props.isReadOnly}
        placeholder={props.isReadOnly ? field.value : props.placeholder}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>

      <FormErrorMessage>{error && error?.message}</FormErrorMessage>
    </FormControl>
  );
}
