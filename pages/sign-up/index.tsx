import { useRouter } from "next/router"
import useSWRMutation from "swr/mutation"

export interface RegistrationFormData {
  name: string
  phoneNumber: string
  password: string
}

async function registerUser(url: string, { arg }: { arg: RegistrationFormData }) {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: arg.name,
      phoneNumber: arg.phoneNumber,
      password: arg.password
    })
  })
}

export default function SignIn() {
  const router = useRouter()
  const { trigger } = useSWRMutation<void, any, string, RegistrationFormData>('/api/auth/sign-up', registerUser)


  async function handleSignUp() {
    console.log("Clicked. Loading...")
    const result = await trigger({ name: "jhon", phoneNumber: "+380631231212", password: "secret" })
    console.log("Loaded!")

    // router.push('/sign-in')
  }

  return (
    <>
      <h1>Registration</h1>
      <button onClick={handleSignUp}>Sign Up</button>
    </>
  )
}