import RegisterForm from "@/components/auth/RegisterForm";

export default function Register() {
  return (
    <section className="bg-purple-100 min-h-screen dark:bg-purple-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* Logo */}
        <span className="font-bold text-purple-900 text-4xl mb-4">PennyWise</span>
        <div className="w-full bg-purple-200 rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-purple-800 dark:border-purple-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-purple-900 md:text-2xl dark:text-white text-center">
              Create a new account
            </h1>
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
