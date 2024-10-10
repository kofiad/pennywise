import { Pencil } from "lucide-react"
import Link from "next/link"
import DeleteButton from "./DeleteButton"


export default function DataTable({data=[], columns=[], resource}) {
  return (
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {
            data.length > 0 ?(
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {
                                columns.map((columnTitle, index) => {
                                    return(
                                        <th key={index} scope="col" className="px-6 py-3">
                                            {columnTitle}
                                        </th>
                                    )
                                })
                            }
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return(
                                <tr
                                    key={index}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                                >
                                    {columns.map((columnName, i) => (
                                    <td key={i} className="px-6 py-4">
                                        { columnName === "created" ||
                                        columnName === "updated" ? (
                                        new Date(item[columnName]).toLocaleString()
                                        ) : (
                                        item[columnName]
                                        )}
                                    </td>
                                    ))}

                                    <td className="px-6 py-4 text-right flex items-center space-x-4">
                                    <Link
                                        href={`/dashboard/${resource}/update/${item.id}`}
                                        className="font-medium text-blue-600 dark:text-blue-500 flex items-center space-x-1 hover:text-blue-400"
                                    >
                                        <Pencil className="w-4 h-4" />
                                        <span>Edit</span>
                                    </Link>
                                    <DeleteButton endpoint={resource} id={item.id} />
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            ) : (
                <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                    No data found
                </div>
            )
        }

    </div>
  )
}
