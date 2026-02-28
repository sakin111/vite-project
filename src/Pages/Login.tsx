import Layout from "@/components/Layout/Layout"
import { LoginForm } from "@/components/login-form"


export default function Login() {
  return (
  <Layout hideNav hideFooter>
     <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 bg-">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm />
      </div>
    </div>
  </Layout>
  )
}
