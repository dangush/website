export default function LinkTo({href, children }) {
    return (
        <a className="hover:cursor-pointer hover:bg-amber-500 border-b-2 border-amber-500 hover:border-black hover:text-white"
            href={href}
            target="_blank"
            rel="noopener noreferrer">
        {children}
        </a>
    )
}  