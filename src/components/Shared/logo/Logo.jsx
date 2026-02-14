export default function Logo() {
    return (
        <div className="flex items-center gap-2 shrink-0">
            <img src="/logo.svg" alt="Logo" className="w-8 md:w-16" />
            {/* Hide logo title on very small mobile screens */}
            <img src="/logo-title.svg" alt="Title" className="w-24 md:w-40 mt-2 md:mt-4" />
        </div>
    )
}