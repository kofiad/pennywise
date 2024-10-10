"use client";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


export default function DeleteButton({endpoint, id }) {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  async function handleDelete() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        await fetch(`${baseUrl}/api/${endpoint}?id=${id}`, {
        method: "DELETE",
        });
        toast.success("Successfully deleted.");
        router.refresh();
      }
    });
  }

  return (
    <button className="font-medium text-red-600 dark:text-blue-500 flex items-center space-x-1 hover:text-red-400" onClick={handleDelete}>
        <Trash2 className="w-4 h-4" />
        <span>Delete</span>
    </button>
  );
}
