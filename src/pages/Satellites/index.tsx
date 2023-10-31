import { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight, FaSatelliteDish } from 'react-icons/fa';
import { AiFillCheckCircle, AiFillCloseCircle, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import './styles.scss';
import { useDisclosure, Text, Table, TableContainer, Thead, Tr, Td, Tbody, Th, Select, Grid, GridItem } from '@chakra-ui/react';
import { Modal } from '../../component/Modal';
import { colors } from '../../styles/Colors';
import { ControlledSelect } from '../../component/ControlledSelect';
import { useForm } from 'react-hook-form';
import { Input } from '../../component/Input';
import Button from '../../component/Button';
import { toast } from '../../component/Toast';
import { BiSearch } from 'react-icons/bi';
import { CategoryMap, categories } from './category';

interface IPagination {
  page: number;
  take: number;
}

export type FormValues = {
  category: string;
  search: string;
};


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

// Ajustar para a paginação feita no back
const Satellites = () => {
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

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (formData) => {
    try {
      const {
        category,
        search,
      } = formData;

      const payload = {
        category,
        search,
      };

      // const response = await api.put('equipment/updateEquipment', payload);
      const response = {status: 200};

      if (response.status === 200) {
        toast.success('Satélites filtrados com sucesso', 'Sucesso');
        return;
      }

      toast.error('Erro ao tentar filtrar os satélites', 'Erro');
    } catch {
      toast.error('Erro ao tentar filtrar os satélites', 'Erro');
    }
  });

  return (
    <div className='page-container'>
      <h2>Satélites</h2>

      <div className='table-container'>
        <form onSubmit={onSubmit}>
          <Grid templateColumns="repeat(5, 1fr)" gap={6} paddingBottom='16px'>
            <GridItem>
              <ControlledSelect
                control={control}
                id="category"
                options={categories.map((category) => ({
                  value: CategoryMap.get(category)?? '',
                  label: category ?? '',
                }))}
                placeholder="Categoria"
                {...register('category')}
              />
            </GridItem>
            <GridItem colSpan={3}>
              <Input
                rightElement={<BiSearch />}
                errors={errors.search}
                {...register('search')}
              />
            </GridItem>
            <GridItem>
              <Button
                type='submit'
                format='circle'
                text='Filtrar'
              />
            </GridItem>
          </Grid>
        </form>
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
                            <AiOutlineStar onClick={onOpen} style={{cursor: 'pointer'}}/>
                          </div>
                        : <div className='icon-container'>
                            <AiFillStar onClick={onOpen} style={{cursor: 'pointer'}}/>
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

export default Satellites;