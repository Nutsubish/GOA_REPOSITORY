// import { useState,useEffect } from "react";

// const Presentational = ({handleRegister, handleSignin, account , logout , addStudent , deleteStudent , students}) =>{
//     return(
//         <main>
//         {account === null ? (
//           <section> 
//             <form onSubmit={handleRegister}>
//               <h1>Registration</h1>
//               <input type="email" name="email" required />
//               <input type="password" name="pass" required />
//               <button>Submit</button>
//             </form>
  
//             <form onSubmit={handleSignin}>
//               <h1>Login</h1>
//               <input type="email" name="email" required />
//               <input type="password" name="pass" required />
//               <button>Submit</button>
//             </form>
//           </section>
//         ) : (
//           <section>
//             <h1>Hello {account.email}</h1>
//             <button onClick={logout}>Log out</button>
  
//             <div>
//               <form onSubmit={addStudent}>
//                 <input
//                   type="text"
//                   name="studentName"
//                   placeholder="student name"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="studentLastname"
//                   placeholder="student lastname"
//                   required
//                 />
//                 <input
//                   type="number"
//                   name="studentAge"
//                   placeholder="student age"
//                   required
//                 />
//                 <button>Add Student</button>
//               </form>
//             </div>
  
//             <table>
//               <tr>
//                 <th>Firstname</th>
//                 <th>Lastname</th>
//                 <th>Age</th>
//               </tr>
//               {students.map((student, index) => {
//                 return (
//                   <tr key={index}>
//                     <td>{student.name}</td>
//                     <td>{student.lastname}</td>
//                     <td>{student.age}</td>
//                     <td>
//                       <button onClick={() => deleteStudent(index)}>Delete</button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </table>
//           </section>
//         )}
//       </main>
//     )
// }
// export default Presentational