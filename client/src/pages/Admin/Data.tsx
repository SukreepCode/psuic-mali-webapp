import React from 'react';
import { useParams } from "react-router-dom";
import { DataTable } from './components';

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

const users: User[] = [
  { id: 0, name: "Thada", age: 27, email: "mildronize@gmail.com" },
  { id: 1, name: "Sompong", age: 35, email: "sompong@thongmeee.com" },
];


const Data = () => {
  const params: any = useParams();
  return (
    <>
      <h3>{params.name}</h3>
      hello page

      <h1>User Interface</h1>
      <DataTable<User>
        objects={users}
        columns={[
          { key: "name", title: "Name" },
          { key: "age", title: "Age" },
          { key: "email", title: "E-mail" },
        ]}
      />
    </>
  );
}

export default Data;
