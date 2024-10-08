"use client";
import FormHeader from "@/components/FormInputs/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import { useState } from "react";


export default function NewExpense() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setloading] = useState(false);


  return (
    <div>
        {/* Header */}
        <FormHeader title="New Expense" href="/dashboard/expense"/>
        {/* Form */}
        <form  className='w-full max-w-4xl mx-auto p-4 my-3 bg-purple-100 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
          <div className='w-full grid gap-4 grid-cols-1 sm:gap-6'>
            <TextInput label='Date' name="date" register={register} errors={errors} />
            <TextInput label='Amount' name="amount" register={register} errors={errors} />
            <TextInput label='Source' name="source" register={register} errors={errors} />
            <TextInput label='Category' name="category" register={register} errors={errors} />
            <TextAreaInput label='Description' name="description" register={register} errors={errors} />
            <div className="flex items-center justify-center w-full"><SubmitButton isLoading={loading} title="Expense"/></div>
          </div>
        </form>
    </div>
  )
}
