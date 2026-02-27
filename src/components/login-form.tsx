import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  FieldDescription,
} from "@/components/ui/field"
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

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      const res = await login(data);

      if (res.success) {
        if (res.data) {
          setAuthUser(res.data);
        }
        toast.success("Logged in successfully");
        navigate("/");
      }
    } catch (err: unknown) {
      console.error("Login Error:", err);

      if (axios.isAxiosError(err)) {
        const message =
          (err.response?.data as { message?: string })?.message;

        if (message === "Password does not match") {
          toast.error("Invalid credentials");
        } else {
          toast.error(message || "Login failed");
        }
      } else {
        toast.error(
          err instanceof Error ? err.message : "Login failed"
        );
      }
    }
  };


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@example.com"
                        className="h-10 sm:h-11 text-sm sm:text-base"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        className="h-10 sm:h-11 text-sm sm:text-base"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full h-10 sm:h-11 text-sm sm:text-base">
                Login
              </Button>

            </form>
          </Form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
