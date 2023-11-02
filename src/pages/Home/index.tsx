import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure, Text, Heading, Flex } from '@chakra-ui/react';
import { FaArrowCircleLeft, FaArrowCircleRight, FaSatelliteDish } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';
import { colors } from '../../styles/Colors';
import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Modal } from '../../component/Modal';
import DeviceCard from '../../component/DeviceCard';


interface IPagination {
  page: number;
  take: number;
}

const data = [
  { id: '25544', name: 'SPACE STATION' , favorite: true },
  { id: '25545', name: 'SPACE STATION 2' , favorite: true },
  { id: '25544', name: 'SPACE STATION' , favorite: false},
  { id: '25545', name: 'SPACE STATION 2' , favorite: true },
  { id: '25544', name: 'SPACE STATION' , favorite: true},
  { id: '25545', name: 'SPACE STATION 2' , favorite: true },
  { id: '25544', name: 'SPACE STATION' , favorite: true},
  { id: '25545', name: 'SPACE STATION 2' , favorite: true },
  { id: '25544', name: 'SPACE STATION' , favorite: true },
  { id: '25545', name: 'SPACE STATION 2' , favorite: true},
  { id: '25544', name: 'SPACE STATION' , favorite: false },
  { id: '25545', name: 'SPACE STATION 2' , favorite: false },
  { id: '25544', name: 'SPACE STATION' , favorite: false },
  { id: '25545', name: 'SPACE STATION' , favorite: true },
  { id: '25544', name: 'SPACE STATION' , favorite: true },
  { id: '25544', name: 'SPACE STATION' , favorite: false},
  { id: '25544', name: 'SPACE STATION' , favorite: true },
  { id: '25544', name: 'SPACE STATION' , favorite: true},
  { id: '25544', name: 'SPACE STATION' , favorite: true },
]

const Home = () => {
  // TODO: change to real authentication
  const isAuthenticated = true;
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
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} />;
  } else {
    return (
      <div className='page-container'>
        <h2>Home</h2>

        <div className='table-container'>
          <Heading as='h4' textAlign='center' marginBottom='16px'>Satélites</Heading>
          <Text fontSize='30px' marginBottom='16px'> Favoritos:</Text>
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
                position="sticky"
                top="0"
                zIndex={+1}
              >
                <Tr width="100%" color={colors.white}>
                  <Th fontSize='sm'>ID</Th>
                  <Th fontSize='sm'>Nome</Th>
                  <Th fontSize='sm'>Favorito</Th>
                  <Th fontSize='sm'>Ação</Th>
                </Tr>
              </Thead>
              <Tbody fontWeight="semibold" maxHeight="200px">
                {data.slice(pagination.page * pagination.take, (pagination.page * pagination.take) + pagination.take).map((satellite, idx) => {
                  return (
                    <Tr key={idx}>                          
                      <Td>{satellite.id}</Td>
                      <Td>{satellite.name}</Td>
                      <Td>
                        {satellite.favorite 
                          ? <div className='icon-container'>
                              <AiOutlineStar style={{cursor: 'pointer'}}/>
                            </div>
                          : <div className='icon-container'>
                              <AiFillStar style={{cursor: 'pointer'}}/>
                            </div>
                        }
                      </Td>
                      <Td>
                        <div className='action-container'>
                          <FaSatelliteDish onClick={onOpen} style={{cursor: 'pointer'}}/>
                        </div>
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
          <Heading as='h4' textAlign='center' margin='32px 0px 32px 0px'>Dispositivos</Heading>
          <Flex flexDirection='row' flexWrap='wrap' justifyContent='center' gap='16px'>
            <DeviceCard 
              header='Motor X'
              text='Status: Funcionando'
              status={true}
            />
            <DeviceCard 
              header='Motor X'
              text='Status: Funcionando'
              status={true}
            />
            <DeviceCard 
              header='Motor X'
              text='Status: Não Funcionando'
              status={false}
            />
          </Flex>
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
    )
  }
};

export default Home;