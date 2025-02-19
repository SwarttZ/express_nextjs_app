import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import SupplierList from "../SupplierList"

const mockSuppliers = [
  {
    _id: "1",
    name: "Supplier 1",
    logo: "logo1.png",
    state: "State 1",
    costPerKWh: 0.5,
    minKWh: 100,
    totalCustomers: 1000,
    averageRating: 4.5,
  },
  {
    _id: "2",
    name: "Supplier 2",
    logo: "logo2.png",
    state: "State 2",
    costPerKWh: 0.6,
    minKWh: 200,
    totalCustomers: 2000,
    averageRating: 4.0,
  },
]

describe("SupplierList", () => {
  it("renders correctly with suppliers", () => {
    render(<SupplierList suppliers={mockSuppliers} onSelect={() => {}} selectedSuppliers={[]} />)
    expect(screen.getByText("Supplier 1")).toBeInTheDocument()
    expect(screen.getByText("Supplier 2")).toBeInTheDocument()
  })

  it("renders message when no suppliers", () => {
    render(<SupplierList suppliers={[]} onSelect={() => {}} selectedSuppliers={[]} />)
    expect(screen.getByText(/Nenhum fornecedor encontrado/i)).toBeInTheDocument()
  })

  it("calls onSelect when checkbox is clicked", () => {
    const mockOnSelect = jest.fn()
    render(<SupplierList suppliers={mockSuppliers} onSelect={mockOnSelect} selectedSuppliers={[]} />)

    fireEvent.click(screen.getAllByRole("checkbox")[0])
    expect(mockOnSelect).toHaveBeenCalledWith(mockSuppliers[0])
  })

  it("updates selectedSuppliers correctly", () => {
    const mockOnSelect = jest.fn()
    render(<SupplierList suppliers={mockSuppliers} onSelect={mockOnSelect} selectedSuppliers={[]} />)

    fireEvent.click(screen.getAllByRole("checkbox")[0])
    expect(mockOnSelect).toHaveBeenCalledWith(mockSuppliers[0])
    expect(screen.getAllByRole("checkbox")[0]).toBeChecked()

    fireEvent.click(screen.getAllByRole("checkbox")[0])
    expect(mockOnSelect).toHaveBeenCalledTimes(2)
    expect(screen.getAllByRole("checkbox")[0]).not.toBeChecked()
  })

  it("renders correctly with selected suppliers", () => {
    render(<SupplierList suppliers={mockSuppliers} onSelect={() => {}} selectedSuppliers={[mockSuppliers[0]]} />)
    expect(screen.getAllByRole("checkbox")[0]).toBeChecked()
  })
})

