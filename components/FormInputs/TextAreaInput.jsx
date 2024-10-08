"use client"

export default function TextAreaInput({label, name, register, errors, isRequired=true, className="sm:col-span-2"}) {
  return (
    <div className={className}>
      <div className="mt-2">
        <textarea
          {...register(`${name}`, { required: isRequired })}
          name={name}
          id={name}
          rows={3}
          className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-purple-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
          defaultValue={""}
          placeholder={`\nType the ${label}`}
        />
        {errors[`${name}`] && (
          <span className="text-sm text-purple-600 ">{label} is required</span>
        )}
      </div>
    </div>
 )
}
