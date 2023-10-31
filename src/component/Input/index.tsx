import { ReactElement } from 'react';
import { FieldError } from 'react-hook-form';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Input as ChakraInput,
  InputAddonProps,
  InputElementProps,
  InputGroup,
  InputProps as ChakraInputProps,
  InputRightElement,
} from '@chakra-ui/react';

export interface InputProps extends ChakraInputProps {
  label?: string | JSX.Element;
  errors: FieldError | undefined;
  rightElement?: ReactElement<InputElementProps>;
  rightAddon?: ReactElement<InputAddonProps>;
}

export const Input = forwardRef<InputProps, 'input'>((props, ref) => {
  const {
    label,
    errors,
    rightElement,
    ...rest
  } = props;

  return (
    <FormControl isInvalid={Boolean(errors)}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        <ChakraInput {...rest} ref={ref} border={'1px solid'} borderRadius={'20px'}/>
        {rightElement && <InputRightElement>{rightElement}</InputRightElement>}
      </InputGroup>
      <FormErrorMessage>{errors?.message}</FormErrorMessage>
    </FormControl>
  );
});
