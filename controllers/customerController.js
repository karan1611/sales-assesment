const { Customer } = require("../models"); // Import Customer model

// Get all customers
const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll(); // Fetch all customers
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch customers" });
    }
};

// Get a single customer by ID
const getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) {
            return res.status(404).json({ error: "Customer not found" });
        }
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch customer" });
    }
};

// Create a new customer
const createCustomer = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const newCustomer = await Customer.create({ name, email, phone });
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(500).json({ error: "Failed to create customer" });
    }
};

// Update a customer by ID
const updateCustomer = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) {
            return res.status(404).json({ error: "Customer not found" });
        }
        await customer.update({ name, email, phone });
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: "Failed to update customer" });
    }
};

// Delete a customer by ID
const deleteCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) {
            return res.status(404).json({ error: "Customer not found" });
        }
        await customer.destroy();
        res.json({ message: "Customer deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete customer" });
    }
};

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};
