import Link from 'next/link'

export default function ThemeLink({ className, title, href, Icon }) {
  return (
    <Link href={href} className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-8 py-3 text-center flex items-center justify-center gap-2 ${className}`}>
      {title}
      {Icon && <Icon className="w-5 h-5 mr-2" />}
    </Link>
  )
}
