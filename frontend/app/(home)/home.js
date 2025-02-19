import { useState } from "react";
import { ChakraProvider, Box, VStack, Heading, Container, Spinner, Text } from "@chakra-ui/react";
import ConsumptionForm from "../components/ConsumptionForm";
import SupplierList from "../components/SupplierList";
import SupplierComparison from "../components/SupplierComparison";
import ConsumptionChart from "../components/ConsumptionChart";

function Home() {
  const [suppliers, setSuppliers] = useState([])
  const [selectedSuppliers, setSelectedSuppliers] = useState([])
  const [consumption, setConsumption] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchSuppliers = async (consumptionValue) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/suppliers/eligible?consumption=${consumptionValue}`,
      )
      if (!response.ok) {
        throw new Error("Erro ao buscar fornecedores")
      }
      const data = await response.json()
      setSuppliers(data)
      setConsumption(consumptionValue)
    } catch (error) {
      console.error("Falha ao buscar fornecedores:", error)
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSupplierSelect = (supplier) => {
    setSelectedSuppliers((prev) => {
      if (prev.find((s) => s._id === supplier._id)) {
        return prev.filter((s) => s._id !== supplier._id)
      }
      return [...prev, supplier].slice(0, 3)
    })
  }

  return (
    <ChakraProvider>
      <Box minHeight="100vh" bg="gray.50">
        <Container maxW="container.xl" py={8}>
          <VStack spacing={8} align="stretch">
            <Heading as="h1" size="xl" textAlign="center">
              Escolha de Fornecedor de Energia
            </Heading>
            <ConsumptionForm onSubmit={fetchSuppliers} isLoading={isLoading} />
            {isLoading && <Spinner size="xl" />}
            {error && <Text color="red.500">Erro: {error}</Text>}
            <SupplierList
              suppliers={suppliers}
              onSelect={handleSupplierSelect}
              selectedSuppliers={selectedSuppliers}
              maxSelection={3}
            />
            {selectedSuppliers.length > 0 && (
              <SupplierComparison suppliers={selectedSuppliers} consumption={consumption} />
            )}
            {consumption > 0 && <ConsumptionChart consumption={consumption} suppliers={suppliers} />}
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default Home;
