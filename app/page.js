import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h2 className="text-3xl m-b-4">
        PennyWise
      </h2>
      <Link href="/dashboard/home">View dashboard</Link>
    </div>
  );
}
