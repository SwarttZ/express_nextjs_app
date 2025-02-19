import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Box } from "@chakra-ui/react"

function SupplierComparison({ suppliers, consumption }) {
  return (
    <Box overflowX="auto">
      <Table variant="simple">
        <TableCaption>Comparação de Fornecedores</TableCaption>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th isNumeric>Custo por kWh</Th>
            <Th isNumeric>Custo Mensal Estimado</Th>
            <Th isNumeric>Avaliação</Th>
          </Tr>
        </Thead>
        <Tbody>
          {suppliers.map((supplier) => (
            <Tr key={supplier._id}>
              <Td>{supplier.name}</Td>
              <Td isNumeric>R$ {supplier.costPerKWh.toFixed(2)}</Td>
              <Td isNumeric>R$ {(supplier.costPerKWh * consumption).toFixed(2)}</Td>
              <Td isNumeric>{supplier.averageRating.toFixed(1)}/5</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default SupplierComparison

