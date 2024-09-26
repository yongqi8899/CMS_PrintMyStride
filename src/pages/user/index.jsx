import Table from "@/components/Table";
import {memo} from "react";
const Users = memo(() =>{
  return (
    <>
      <Table path="users" />
    </>
  );
})
export default Users;