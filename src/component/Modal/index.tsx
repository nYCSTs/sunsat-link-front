
import {
  Flex,
  Heading,
  Modal as ModalContainer,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps as ChakraModalProps,
} from '@chakra-ui/react';
import { colors } from '../../styles/Colors';
import Button from '../Button';

export interface ModalProps extends ChakraModalProps {
  onConfirm: () => void;
}


export function Modal({ children,  ...props }: ModalProps) {
  return (
    <ModalContainer blockScrollOnMount={false} {...props} >
      <ModalOverlay bg="blackAlpha.500" />
      <ModalContent
        transform="auto-gpu" // force the browser use GPU acceleration for that particular element instead of the CPU
        bg={colors.white}
        backdropFilter="blur(8px)"
        borderRadius='20px'
      >
        <ModalHeader
          bg={colors.white}
          display="flex"
          justifyContent="center"
          borderTopRadius='20'>
          <Heading
            fontWeight="bold"
            fontSize="40px"
            textColor={colors.black}
            textAlign="center"
            paddingBottom='0px'
          >
            Atenção
          </Heading>
        </ModalHeader>

        <ModalBody px="44px" bg={colors.white} borderBottomRadius='20'>
          {children}
          <Flex gap='16px' justifyContent='right' paddingBottom='20px' marginTop='20px'>
            <Button
              onClick={props.onClose}  
              color='secondary'
              format='circle'
              text='Cancelar'
            />
            <Button
              onClick={props.onConfirm}
              format='circle'
              text='Confirmar'
            />
          </Flex>
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );
}