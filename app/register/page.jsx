import RegisterForm from "@/components/auth/RegisterForm";

export default function Register() {
  return (
    <section className="bg-blue-300 min-h-screen dark:bg-blue-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-blue-900 dark:text-white"
        >
          <img
            className="w-25 h-10 mr-2"
            src="/logo.svg"
            alt="logo"
          />
        </a>
        <div className="w-full bg-blue-200 rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-blue-800 dark:border-blue-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-900 md:text-2xl dark:text-white text-center">
              Create a new account
            </h1>
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
