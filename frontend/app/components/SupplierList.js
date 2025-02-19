import { SimpleGrid, Box, Image, Text, Checkbox, VStack } from "@chakra-ui/react"

function SupplierList({ suppliers, onSelect, selectedSuppliers }) {
  if (suppliers.length === 0) {
    return <Text textAlign="center">Nenhum fornecedor encontrado para o consumo informado.</Text>
  }

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={6}>
      {suppliers.map((supplier) => (
        <Box key={supplier._id} borderWidth={1} borderRadius="lg" p={4} bg="white">
          <VStack spacing={3} align="stretch">
            <Image
              src={supplier.logo || "/placeholder.svg"}
              alt={`Logo da ${supplier.name}`}
              maxH="100px"
              objectFit="contain"
            />
            <Text fontWeight="bold">{supplier.name}</Text>
            <Text>Estado: {supplier.state}</Text>
            <Text>Custo por kWh: R$ {supplier.costPerKWh.toFixed(2)}</Text>
            <Text>Consumo Mínimo: {supplier.minKWh.toLocaleString()} kWh</Text>
            <Text>Total de Clientes: {supplier.totalCustomers.toLocaleString()}</Text>
            <Text>Avaliação: {supplier.averageRating.toFixed(1)}/5</Text>
            <Checkbox
              isChecked={selectedSuppliers.some((s) => s._id === supplier._id)}
              onChange={() => onSelect(supplier)}
            >
              Selecionar para comparação
            </Checkbox>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default SupplierList

