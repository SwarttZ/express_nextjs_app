import { Box, Heading } from "@chakra-ui/react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

function ConsumptionChart({ consumption, suppliers }) {
  const data = suppliers.map((supplier) => ({
    name: supplier.name,
    custo: supplier.costPerKWh * consumption,
  }))

  return (
    <Box bg="white" p={6} borderRadius="md" boxShadow="md">
      <Heading as="h3" size="md" mb={4}>
        Comparação de Custos Mensais
      </Heading>
      <Box height="400px">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="custo" fill="#3182CE" name="Custo Mensal (R$)" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}

export default ConsumptionChart

