import { createStandaloneToast } from '@chakra-ui/react';

const { toast: ChakraToast } = createStandaloneToast();

class Toast {
  success(message: string, title?: string) {
    return ChakraToast({
      ...(title && { title }),
      description: message,
      status: 'success',
      duration: 4500,
      isClosable: true,
    });
  }

  error(message: string, title?: string) {
    return ChakraToast({
      ...(title && { title }),
      description: message,
      status: 'error',
      duration: 4500,
      isClosable: true,
    });
  }
}

export const toast = new Toast();
