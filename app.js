let expenses = [];
    
        function addExpense() {
          const desc = document.getElementById('desc').value;
          const amount = parseFloat(document.getElementById('amount').value);
          const category = document.getElementById('category').value;
    
          if (!desc || !amount || isNaN(amount)) {
            alert('Please enter valid data.');
            return;
          }
    
          expenses.push({ desc, amount, category });
          document.getElementById('desc').value = '';
          document.getElementById('amount').value = '';
    
          renderExpenses();
        }
    
        function renderExpenses() {
          const list = document.getElementById('expenseList');
          list.innerHTML = '';
    
          expenses.forEach((exp, index) => {
            const item = document.createElement('div');
            item.className = 'expense-item';
            item.innerHTML = `
              ${exp.desc} - $${exp.amount.toFixed(2)} (${exp.category})
              <button style="float:right; background:#e74c3c;" onclick="deleteExpense(${index})">Delete</button>
            `;
            list.appendChild(item);
          });
    
          const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
          document.getElementById('summary').innerText = `Total: $${total.toFixed(2)}`;
        }
    
        function deleteExpense(index) {
          expenses.splice(index, 1);
          renderExpenses();
        }