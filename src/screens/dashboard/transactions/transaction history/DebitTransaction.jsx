import { ScrollView } from 'react-native'
import React from 'react'
import TransactionUnit from '../../../../components/ui/molecules/TransactionUnit';
const DebitTransaction = () => {
    const transactionContents = [
        {
          id: 1,
          value: "debit",
          day: "24",
          month: "May",
          name: "John doe",
          amount: "3000",
        },
        {
          id: 1,
          value: "debit",
          day: "14",
          month: "Sept",
          name: "Alapelode tobiloba",
          amount: "200",
        },
        {
          id: 1,
          value: "debit",
          day: "10",
          month: "Jan",
          name: "Alapelode tomi",
          amount: "100",
        },
        {
          id: 1,
          value: "debit",
          day: "14",
          month: "Sept",
          name: "Mudalue tracy",
          amount: "200",
        },
        {
          id: 1,
          value: "debit",
          day: "14",
          month: "Sept",
          name: "Amadi Chukwu",
          amount: "2000",
        },
      ];
  return (
    <ScrollView style={{ display: "flex", height: "100%", marginTop: 10 }}>
    {transactionContents.map((debitTransactionContent) => (
      <TransactionUnit
        value={debitTransactionContent.value}
        day={debitTransactionContent.day}
        month={debitTransactionContent.month}
        name={debitTransactionContent.name}
        amount={debitTransactionContent.amount}
        key={debitTransactionContent.amount}
      />
    ))}
  </ScrollView>
  )
}

export default DebitTransaction