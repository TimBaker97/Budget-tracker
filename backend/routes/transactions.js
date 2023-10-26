const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

const {
  addExpense,
  getExpenses,
  deleteExpense,
} = require('../controllers/expense.js');
const {
  addBudget,
  getBudgets,
  deleteBudget,
} = require('../controllers/budget.js');

router
  .post('/add-budget', addBudget)
  .get('/get-budgets', getBudgets)
  .delete('/delete-budget/:id', deleteBudget)
  .post('/add-expense', addExpense)
  .get('/get-expenses', getExpenses)
  .delete('/delete-expense/:id', deleteExpense);

module.exports = router;
