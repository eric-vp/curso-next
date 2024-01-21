import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div>
            <h1>Ops, link não encontrado</h1>
            <Link href="/" passHref>Ir para Home</Link>
        </div>
    )
}