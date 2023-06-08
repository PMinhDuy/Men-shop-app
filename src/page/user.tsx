import { useGetUsersQuery } from "../generated/schemas";

export default function Users() {
  const { data } = useGetUsersQuery();
  return (
    <div>
      {data?.users?.map((user) => (
        <div key={user?.id}>
          <p>{user?.email}</p>
          <p>{user?.id}</p>
        </div>
      ))}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
  );
}
