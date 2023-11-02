import React from 'react';
import { Box, Card, CardBody, CardHeader } from '@chakra-ui/react';
import { colors } from '../../styles/Colors';

interface DeviceCardProps {
  header: string;
  text: string;
  status: boolean;
}

const DeviceCard = ({ header, text, status }: DeviceCardProps) => {

  return (
    <Card maxW='250px' backgroundColor={colors.white}>
      <CardHeader textAlign='center'>
        {status
          ?  <Box backgroundColor={colors.green} width='16px' height='16px' borderRadius='8px'/>
          :  <Box backgroundColor={colors.red} width='16px' height='16px' borderRadius='8px'/>
        }
        {header}
      </CardHeader>
      <CardBody textAlign='center' marginBottom='8px'>
        {text}
      </CardBody>
    </Card>
  )
}

export default DeviceCard;