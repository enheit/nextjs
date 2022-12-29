import { useRouter } from "next/router"
import { mutate } from "swr"
import useSWRMutation from "swr/mutation"

interface AuthenticationFormData {
  username: string
  password: string
}

async function updateUser(url: string, { arg }: { arg: AuthenticationFormData }) {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      username: arg.username,
      password: arg.password
    })
  })
}

export default function SignIn() {
  const router = useRouter()
  const { trigger } = useSWRMutation<void, any, string, AuthenticationFormData>('/api/auth/sign-in', updateUser)
  

  async function handleSignIn () {
    const result = await trigger({ username: "jhon", password: "secret" })
    router.push('/dashboard')
  }

  return (
    <>
      <h1>Sign In page</h1>
      <button onClick={handleSignIn}>Sign In</button>
    </>
  )
}