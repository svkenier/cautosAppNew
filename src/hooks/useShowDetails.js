import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const useShowDetails = () => {
  const dataDrivers = [
    {
      id: 1,
      driver: 'por Asignar',
      vehicles: 'N-A',
      placa: 'N-A',
      status: 'Anulado',
      total: 3.66,
      banksAccounts:[{
        bank:"banesco",
        accountNumber:"0987654321",
        name:"juan aguilar",
        cedula:"24956423"
      }]
    },
    {
      id: 2,
      driver: 'juan aguilar',
      vehicles: 'ford fiesta',
      placa: 'taz-815',
      status: 'Pagado',
      total: 3.66,
      banksAccounts:[{
        bank:"banesco",
        accountNumber:"0987654321",
        name:"juan aguilar",
        cedula:"24956423"
      },{
        bank:"venezuela",
        accountNumber:"0988656321",
        name:"juan aguilar",
        cedula:"24956423"
      }]
    },
    {
      id: 3,
      driver: 'juan aguilar',
      vehicles: 'ford fiesta',
      placa: 'taz-815',
      status: 'Rodando',
      total: 3.66,
      banksAccounts:[]
    },
    {
      id: 4,
      driver: 'juan aguilar',
      vehicles: 'ford fiesta',
      placa: 'taz-815',
      status: 'Por pagar',
      total: 3.66,
      banksAccounts:[{
        bank:"banesco",
        accountNumber:"0987654321",
        name:"juan aguilar",
        cedula:"24956423"
      },{
        bank:"venezuela",
        accountNumber:"0988656321",
        name:"juan aguilar",
        cedula:"24956423"
      },{
        bank:"bicentenario",
        accountNumber:"0987856431",
        name:"juan aguilar",
        cedula:"24956423"
      }]
    },
    {
      id: 5,
      driver: 'juan aguilar',
      vehicles: 'ford fiesta',
      placa: 'taz-815',
      status: 'Pendiente',
      total: 3.66,
      banksAccounts:[{
        bank:"banesco",
        accountNumber:"0987654321",
        name:"juan aguilar",
        cedula:"24956423"
      },{
        bank:"venezuela",
        accountNumber:"0988656321",
        name:"juan aguilar",
        cedula:"24956423"
      },{
        bank:"bicentenario",
        accountNumber:"0987886131",
        name:"juan aguilar",
        cedula:"24956423"
      }]
    },
  ];

  const [driverFound, setDriverFound] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  const showDetailsServices = async (id) => {
    let findDriver = dataDrivers.find((item) => item.id === id);
    setDriverFound(findDriver);
  };

  useEffect(() => {
    if (driverFound.id) {
      navigation.navigate('DetailsServicesScreen', { driverFound: driverFound });
    }
  }, [driverFound]);

  useEffect(() => {
    setIsLoading(false);
  }, []);


  // show details transaction

  const transactionList = [
    {
      dateDeposit: "Sáb, 6 de Sep de 2023",
      bank: "Banesco",
      typeOperation: "Credito",
      reference: "1235451254125asd",
      amountDeposited: 10.0,
      acredictedAmount: 10.0,
      status: "Aprobado",
    },
    {
      dateDeposit: "Sáb, 8 de Sep de 2023",
      bank: "Banco Venezuela",
      typeOperation: "Credito",
      reference: "1235451255849asd",
      amountDeposited: 10.0,
      acredictedAmount: 10.0,
      status: "Rechazada",
    },
  ];

  const [transactionFound, setTransactionFound] = useState({});

  const showDetailsTransaction = async (reference) => {
    let findTransaction = transactionList.find((item) => item.reference === reference);
    setTransactionFound(findTransaction);
  };

  useEffect(() => {
    if (transactionFound.reference) {
      navigation.navigate('DetailsTransactionScreen', { transactionFound: transactionFound });
    }
  }, [transactionFound]);

  

  return {
    dataDrivers,
    transactionList,
    showDetailsServices,
    showDetailsTransaction,
    driverFound,
    isLoading,
  };
};

export default useShowDetails;