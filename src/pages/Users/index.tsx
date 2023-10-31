import { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

import './styles.scss';
import { useDisclosure, Text, Table, TableContainer, Thead, Tr, Td, Tbody, Th } from '@chakra-ui/react';
import { Modal } from '../../component/Modal';
import { colors } from '../../styles/Colors';

enum RolesEnum {
  DEFAULT = 'PADRÃO',
  ADMIN = 'ADMIN'
};

interface IPagination {
  page: number;
  take: number;
}


const data = [
  { email: 'email@email.com', permissions: RolesEnum.DEFAULT, active: false },
  { email: 'email@email.com', permissions: RolesEnum.DEFAULT, active: false },
  { email: 'email@email.com', permissions: RolesEnum.ADMIN, active: true },
  { email: 'email@email.com', permissions: RolesEnum.DEFAULT, active: false },
  { email: 'email@email.com', permissions: RolesEnum.DEFAULT, active: true },
  { email: 'email@email.com', permissions: RolesEnum.DEFAULT, active: false },
  { email: 'email@email.com', permissions: RolesEnum.DEFAULT, active: true },
  { email: 'email@email.com', permissions: RolesEnum.DEFAULT, active: false },
  { email: 'email@email.com', permissions: RolesEnum.DEFAULT, active: false },
  { email: 'email@email.com', permissions: RolesEnum.DEFAULT, active: true },
  { email: 'email@email.com', permissions: RolesEnum.ADMIN, active: false },
  { email: 'email@email.com', permissions: RolesEnum.ADMIN, active: false },
  { email: 'email@email.com', permissions: RolesEnum.ADMIN, active: false },
  { email: 'email@email.com', permissions: RolesEnum.DEFAULT, active: false },
  { email: 'email@email.com', permissions: RolesEnum.DEFAULT, active: false },
  { email: 'email@email.com', permissions: RolesEnum.ADMIN, active: true },
  { email: 'email@email.com', permissions: RolesEnum.DEFAULT, active: false },
  { email: 'email@email.com', permissions: RolesEnum.DEFAULT, active: true },
  { email: 'email@email.com', permissions: RolesEnum.DEFAULT, active: false },
]

// Ajustar para a paginação feita no back
const Users = () => {
  const [pagination, setPagination] = useState<IPagination>({ page: 0, take: 10 });

  const paginationPrevious = () => {
    if (pagination.page === 0) return;
    setPagination(currState => ({ ...currState, page: currState.page - 1 }));
  }

  const paginationNext = () => {
    setPagination(currState => ({ ...currState, page: currState.page + 1 }));
  }

  const {
    isOpen,
    onClose,
    onOpen,
  } = useDisclosure();

  return (
    <div className='page-container'>
      <h2>Gerenciamento de Usuários</h2>

      <div className='table-container'>
        <TableContainer
          height="55vh"
          whiteSpace="inherit"
          fontSize="sm"
          border="1px"
          borderColor='whiteAlpha.100'
          overflowY="auto"
        >
          <Table
            variant="unstyled"
            colorScheme="whiteAlpha"
            width="100%"
            __css={{'table-layout': 'fixed', width: 'full'}}
          >
            <Thead
              bg='white'
              fontWeight="semibold"
              fontSize='md'
              position="sticky"
              top="0"
              zIndex={+1}
            >
              <Tr width="100%" color={colors.white}>
                <Th fontSize='sm'>E-mail</Th>
                <Th fontSize='sm'>Permissões</Th>
                <Th fontSize='sm'>Autorizar</Th>
              </Tr>
            </Thead>
            <Tbody fontWeight="semibold" maxHeight="200px">
              {data.slice(pagination.page * pagination.take, (pagination.page * pagination.take) + pagination.take).map((user, idx) => {
                return (
                  <Tr key={idx}>                          
                    <Td>{user.email}</Td>
                    <Td>{user.permissions}</Td>
                    <Td>
                      {user.active 
                        ? 'Autorizado'
                        : (
                          <div className='manage-user'>
                            <AiFillCheckCircle onClick={onOpen}/> <AiFillCloseCircle />
                          </div>
                        )
                      }
                    </Td>
                  </Tr>
                )
              })}
              
            </Tbody>
          </Table>
        </TableContainer>
        <div className='pagination'>
          <FaArrowCircleLeft 
            name="previous" 
            className={`icon pointer ${pagination.page === 0 && 'disabled'}`}
            onClick={paginationPrevious} 
          />
          <span>Página {pagination.page + 1}</span>
          <FaArrowCircleRight 
            name="next" 
            className={`icon pointer`} 
            onClick={paginationNext} 
          />
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={() => console.log('confirmed')}
        size="4xl"
      >
        <Text
          fontSize='xl'
          paddingBottom='20px'
        >
          Realmente deseja autorizar o usuário?
        </Text>
      </Modal>
    </div>
  );
};

export default Users;