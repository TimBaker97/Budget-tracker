const ExpenseSchema = require('../models/expenseModel');

exports.addExpense = async (req, res) => {
  // Here we deconstruct the object that is required by the ExpenseSchema and parse it to the request body.
  const { title, amount, category, description, date } = req.body;

  const expense = ExpenseSchema({
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
    await expense.save();
    res.status(200).json({ message: 'Expense Added' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error when adding the Expense' });
  }

  console.log(expense);
};

exports.getExpenses = async (req, res) => {
  try {
    // The find().sort() methods allow us to put the newest at the top of the database
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ message: 'Server Error when getting the expenses' });
  }
};

exports.deleteExpense = async (req, res) => {
  // req.params assists in getting the ID
  const { id } = req.params;
  // This deleted the desired budget by associating it with its ID
  ExpenseSchema.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ message: 'Expense Deleted' });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Server Error when deleting the expense' });
    });
};
