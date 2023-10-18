import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

import './styles.scss';

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

  return (
    <div className='page-container'>
      <h2>Gerenciamento de Usuários</h2>

      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>E-mail</th>
              <th>Permissões</th>
              <th>Autorizar</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(pagination.page * pagination.take, (pagination.page * pagination.take) + pagination.take).map((user, idx) => {
              return (
                <tr key={idx}>
                  <td>{user.email}</td>
                  <td>{user.permissions}</td>
                  <td>
                    {user.active 
                      ? <span>Autorizado</span> 
                      : (
                        <div className='manage-user'>
                          <AiFillCheckCircle /> <AiFillCloseCircle />
                        </div>
                      )
                    }
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
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
    </div>
  );
};

export default Users;