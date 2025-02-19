import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import ConsumptionForm from "../ConsumptionForm"

describe("ConsumptionForm", () => {
  it("renders correctly", () => {
    render(<ConsumptionForm onSubmit={() => {}} />)
    expect(screen.getByLabelText(/Consumo Mensal de Energia/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Encontrar Fornecedores/i })).toBeInTheDocument()
  })

  it("calls onSubmit with the correct value when form is submitted", () => {
    const mockOnSubmit = jest.fn()
    render(<ConsumptionForm onSubmit={mockOnSubmit} />)

    fireEvent.change(screen.getByLabelText(/Consumo Mensal de Energia/i), { target: { value: "1000" } })
    fireEvent.click(screen.getByRole("button", { name: /Encontrar Fornecedores/i }))

    expect(mockOnSubmit).toHaveBeenCalledWith(1000)
  })

  it("does not call onSubmit when the input is invalid", () => {
    const mockOnSubmit = jest.fn()
    render(<ConsumptionForm onSubmit={mockOnSubmit} />)

    fireEvent.change(screen.getByLabelText(/Consumo Mensal de Energia/i), { target: { value: "-100" } })
    fireEvent.click(screen.getByRole("button", { name: /Encontrar Fornecedores/i }))

    expect(mockOnSubmit).not.toHaveBeenCalled()
  })

  it("displays an error message when the input is invalid", () => {
    render(<ConsumptionForm onSubmit={() => {}} />)
    fireEvent.change(screen.getByLabelText(/Consumo Mensal de Energia/i), { target: { value: "-100" } })
    fireEvent.click(screen.getByRole("button", { name: /Encontrar Fornecedores/i }))
    expect(screen.getByText(/Consumo inválido/i)).toBeInTheDocument()
  })

  it("does not display an error message when the input is valid", () => {
    render(<ConsumptionForm onSubmit={() => {}} />)
    fireEvent.change(screen.getByLabelText(/Consumo Mensal de Energia/i), { target: { value: "1000" } })
    fireEvent.click(screen.getByRole("button", { name: /Encontrar Fornecedores/i }))
    expect(screen.queryByText(/Consumo inválido/i)).not.toBeInTheDocument()
  })
})

