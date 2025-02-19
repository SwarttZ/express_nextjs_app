"use client";

import React, { useState } from "react";
import axios from "axios";
import {
  FormContainer,
  FormTitle,
  FormGroup,
  Label,
  Input,
  Button,
} from "./style";

const AddSupplierForm = () => {
  const [supplier, setSupplier] = useState({
    name: "",
    logo: "",
    state: "",
    costPerKWh: "",
    minKWh: "",
    totalCustomers: "",
    averageRating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplier({ ...supplier, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3333/api/suppliers/add", supplier);
      alert("Fornecedor cadastrado com sucesso!");
      setSupplier({
        name: "",
        logo: "",
        state: "",
        costPerKWh: "",
        minKWh: "",
        totalCustomers: "",
        averageRating: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar fornecedor:", error);
      alert("Erro ao cadastrar fornecedor.", error);
    }
  };

  return (
    <FormContainer>
      <FormTitle>Cadastrar Fornecedor</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nome:</Label>
          <Input
            type="text"
            name="name"
            value={supplier.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Logo (URL):</Label>
          <Input
            type="text"
            name="logo"
            value={supplier.logo}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Estado:</Label>
          <Input
            type="text"
            name="state"
            value={supplier.state}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Custo por kWh:</Label>
          <Input
            type="number"
            step="0.01"
            name="costPerKWh"
            value={supplier.costPerKWh}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Mínimo de kWh:</Label>
          <Input
            type="number"
            name="minKWh"
            value={supplier.minKWh}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Total de Clientes:</Label>
          <Input
            type="number"
            name="totalCustomers"
            value={supplier.totalCustomers}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Avaliação Média:</Label>
          <Input
            type="number"
            step="0.1"
            name="averageRating"
            value={supplier.averageRating}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit">Cadastrar Fornecedor</Button>
      </form>
    </FormContainer>
  );
};

export default AddSupplierForm;
