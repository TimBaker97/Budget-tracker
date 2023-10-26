const BudgetSchema = require('../models/budgetModel');

exports.addBudget = async (req, res) => {
  // Here we deconstruct the object that is required by the BudgetSchema and parse it to the request body.
  const { title, amount, category, description, date } = req.body;

  const budget = BudgetSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    //validations for checking that the JSON data entered in has the correct fields
    if (!title || !category || !description || !date || !amount) {
      return res.status(400).json({ message: 'All fields are required!' });
    }
    if (amount <= 0 || typeof amount !== 'number') {
      return res
        .status(400)
        .json({ message: 'Amount must be a positive number!' });
    }
    await budget.save();
    res.status(200).json({ message: 'Budget Added' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error when adding the budget' });
  }

  console.log(budget);
};

exports.getBudgets = async (req, res) => {
  try {
    // The find().sort() methods allow us to put the newest at the top of the database
    const budgets = await BudgetSchema.find().sort({ createdAt: -1 });
    res.status(200).json(budgets);
  } catch (err) {
    res.status(500).json({ message: 'Server Error when getting the budgets' });
  }
};

exports.deleteBudget = async (req, res) => {
  // req.params assists in getting the ID
  const { id } = req.params;
  // This deleted the desired budget by associating it with its ID
  BudgetSchema.findByIdAndDelete(id)
    .then((budget) => {
      res.status(200).json({ message: 'Budget Deleted' });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Server Error when deleting the budget' });
    });
};
