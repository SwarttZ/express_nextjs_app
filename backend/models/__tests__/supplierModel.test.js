import mongoose from "mongoose"
import { describe, it, beforeAll, afterAll, expect } from "@jest/globals"
import Supplier from "../supplierModel"

describe("Supplier Model Test", () => {
  beforeAll(async () => {
    await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useUnifiedTopology: true })
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  it("should create & save supplier successfully", async () => {
    const validSupplier = new Supplier({
      name: "Test Supplier",
      logo: "http://example.com/logo.png",
      state: "Test State",
      costPerKWh: 0.5,
      minKWh: 100,
      totalCustomers: 1000,
      averageRating: 4.5,
    })
    const savedSupplier = await validSupplier.save()

    expect(savedSupplier._id).toBeDefined()
    expect(savedSupplier.name).toBe("Test Supplier")
    expect(savedSupplier.costPerKWh).toBe(0.5)
  })

  it("should fail to save supplier with invalid fields", async () => {
    const invalidSupplier = new Supplier({
      name: "Invalid Supplier",
    })
    let err
    try {
      await invalidSupplier.save()
    } catch (error) {
      err = error
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
  })
})

