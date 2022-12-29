import { useUser } from "../../hooks/user.hook"

export default function Dashboard() {
  const { data, isLoading, error } = useUser("63ad8edd3f4a590facac6669");

  if (isLoading) {
    return (
      <h1>Dashboard is loading...</h1>
    )
  }

  if (error) {
    return (
      <h1>Dashboard error</h1>
    )
  }

  return (
    <h1>Hello {data?.name}</h1>
  )
}