import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import z from "zod"
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useNavigate } from "react-router"
import useLogin from "@/service/index.service"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { useAuth } from "@/lib/AuthContext"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { useState } from "react"


const loginSchema = z.object({
  email: z.email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate()
  const { mutateAsync: login } = useLogin();
  const { login: setAuthUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      const res = await login(data);

      const userData = res.success ? res.data : res;

      if (userData && userData.token) {
        setAuthUser(userData);
        toast.success("Logged in successfully");
        navigate("/dashboard");
      } else {
        toast.error("Login failed: Invalid response from server");
      }
    } catch (err: unknown) {
      console.error("Login Error:", err);
      if (axios.isAxiosError(err)) {
        const message = (err.response?.data as { message?: string })?.message;
        toast.error(message || "Login failed");
      } else {
        toast.error(err instanceof Error ? err.message : "Login failed");
      }
    }
  };

  return (
    <div className={cn("flex flex-col gap-4 w-full max-w-sm mx-auto", className)} {...props}>
      <Card className="shadow-xl border-border/50">


        <CardHeader className="pb-4 pt-8 px-8 space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Login to Continue
          </h1>
        </CardHeader>

        <CardContent className="px-8 pb-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">


              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1.5">
                    <FormLabel className="text-sm font-medium">
                      Email address
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        type="email"
                        autoComplete="email"
                        className="h-10"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-sm font-medium">
                        Password
                      </FormLabel>
                      <a
                        href="#"
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          autoComplete="current-password"
                          className="h-10 pr-10"
                          {...field}
                          value={field.value || ""}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-10 w-10 text-muted-foreground hover:text-foreground"
                          onClick={() => setShowPassword((v) => !v)}
                          tabIndex={-1}
                        >
                          {showPassword
                            ? <EyeOff className="h-4 w-4" />
                            : <Eye className="h-4 w-4" />
                          }
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />


              <Button
                type="submit"
                className="w-full h-10 font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in…
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>

            </form>
          </Form>
        </CardContent>




      </Card>


    </div>
  )
}