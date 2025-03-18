import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center p-6 md:p-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Asets/authBanner.png')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Form Container */}
      <div className="relative z-10 flex w-full max-w-sm flex-col gap-6 bg-white/55 p-6 rounded-lg shadow-lg backdrop-blur-md">
        <a href="#" className="flex items-center gap-2 self-center font-medium text-gray-900">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Login Form
        </a>
        <LoginForm />
      </div>
    </div>
  )
}
