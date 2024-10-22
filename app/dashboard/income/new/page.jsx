"use client"
import FormHeader from '@/components/FormInputs/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"

export default function NewIncome({initialData={}, isUpdate=false}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({defaultValues: initialData});

  const [loading, setloading] = useState(false);

  function redirect(){
    router.push("/dashboard/income");
  }

  async function onSubmit(data){
    // console.log(data);
    if (isUpdate) {
      makePutRequest(setloading, `api/income/${initialData.id}`,redirect, data);
    } else {
      makePostRequest(setloading, "api/income", data, reset);
    }
  };

  return (
    <div>
        {/* Header */}
        <FormHeader title={isUpdate?"Update Income":"New Income"} href="/dashboard/income"/>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl mx-auto p-4 my-3 bg-purple-100 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
          <div className='w-full grid gap-4 grid-cols-1 sm:gap-6'>
            <TextInput label='Amount' name="amount" register={register} errors={errors} />
            <TextInput label='Source' name="source" register={register} errors={errors} />
            <TextInput label='Category' name="category" register={register} errors={errors} />
            <TextAreaInput label='Description' name="description" register={register} errors={errors} />
            <div className="flex items-center justify-center w-full"><SubmitButton isLoading={loading} title= {isUpdate?"Update":"Income"}/></div>
          </div>
        </form>
    </div>
  )
}
