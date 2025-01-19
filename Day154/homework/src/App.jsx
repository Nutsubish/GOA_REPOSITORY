import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [students, setStudents] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newName, setNewName] = useState("");

  // Sync account to localStorage
  useEffect(() => {
    localStorage.setItem("account", JSON.stringify(account));
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.setItem("students", JSON.stringify(students));
  }, [account, accounts, students]);

  // Load accounts and account from localStorage on mount
  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("students")) || []);
    setAccounts(JSON.parse(localStorage.getItem("accounts")) || []);
    setAccount(JSON.parse(localStorage.getItem("account")) || null);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const newAccount = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };

    if (accounts.some((acc) => acc.email === newAccount.email)) {
      alert("Account already exists. Please log in.");
      return;
    }

    setAccounts([...accounts, newAccount]);
    alert("Account created successfully!");
    e.target.reset();
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const enteredAccount = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };

    const loggedInUser = accounts.find(
      (acc) =>
        acc.email === enteredAccount.email && acc.pass === enteredAccount.pass
    );

    if (!loggedInUser) {
      alert("Invalid credentials. Please try again.");
      return;
    }

    setAccount(loggedInUser);
    alert("Logged in successfully!");
    e.target.reset();
  };

  const logout = () => {
    setAccount(null);
    alert("Logged out successfully!");
  };

  const addStudent = (e) => {
    e.preventDefault();
    const student = {
      name: e.target.studentName.value,
      lastname: e.target.studentLastname.value,
      age: e.target.studentAge.value,
    };

    setStudents([...students, student]);
  };

  const deleteStudent = (index) => {
    const filteredStudents = students.filter((_, i) => i !== index);
    setStudents(filteredStudents);
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setNewName(students[index].name);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmitNewName = () => {
    if (editingIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editingIndex].name = newName;
      setStudents(updatedStudents);
      setEditingIndex(null);
      setNewName("");
    }
  };

  return (
    <main>
      {account === null ? (
        <section>
          <form onSubmit={handleRegister}>
            <h1>Registration</h1>
            <input type="email" name="email" required />
            <input type="password" name="pass" required />
            <button>Submit</button>
          </form>

          <form onSubmit={handleSignin}>
            <h1>Login</h1>
            <input type="email" name="email" required />
            <input type="password" name="pass" required />
            <button>Submit</button>
          </form>
        </section>
      ) : (
        <section>
          <h1>Hello {account.email}</h1>
          <button onClick={logout}>Log out</button>

          <div>
            <form onSubmit={addStudent}>
              <input
                type="text"
                name="studentName"
                placeholder="student name"
                required
              />
              <input
                type="text"
                name="studentLastname"
                placeholder="student lastname"
                required
              />
              <input
                type="number"
                name="studentAge"
                placeholder="student age"
                required
              />
              <button>Add Student</button>
            </form>
          </div>

          <table>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.lastname}</td>
                  <td>{student.age}</td>
                  <td>
                    <button onClick={() => deleteStudent(index)}>Delete</button>
                    <button onClick={() => handleEditClick(index)}>
                      Change Student Name
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {editingIndex !== null && (
            <div>
              <input
                type="text"
                value={newName}
                onChange={handleNameChange}
                placeholder="Enter new name"
              />
              <button onClick={handleSubmitNewName}>Submit New Name</button>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
