"use client"

import { useState } from "react"
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react"

function ConsumptionForm({ onSubmit, isLoading }) {
  const [consumption, setConsumption] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (consumption > 0) {
      onSubmit(Number(consumption))
    }
  }

  return (
    <Box as="form" onSubmit={handleSubmit} bg="white" p={6} borderRadius="md" boxShadow="md">
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel htmlFor="consumption">Consumo Mensal de Energia (kWh)</FormLabel>
          <Input
            id="consumption"
            type="number"
            value={consumption}
            onChange={(e) => setConsumption(e.target.value)}
            placeholder="Ex: 1000"
            min="1"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" isLoading={isLoading} loadingText="Buscando...">
          Encontrar Fornecedores
        </Button>
      </VStack>
    </Box>
  )
}

export default ConsumptionForm

