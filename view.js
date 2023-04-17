function viewDepartments() {
    connection.query('SELECT * FROM departments', (err, rows) => {
      if (err) throw err;
      console.table(rows);
      main();
    });
  }
  