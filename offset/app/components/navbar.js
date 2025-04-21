import Link from "next/link";
import Button from "./button";
import Image from "next/image";

export default function Navbar() {
    
    return (
        <div className="flex items-center justify-between px-12 py-8">

            <div className="text-2xl font-bold">
                <Link href="/home" className="flex items-center space-x-2">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={200}
                        height={40}
                        priority
                    />
                </Link>
            </div>

            <div className="flex items-center gap-4">
                <Button href="/catalogo" variant="text">CATÁLOGO</Button>
                <Button href="/certificacoes" variant="text">CERTIFICAÇÕES</Button>
                <Button href="/sobre" variant="text">SOBRE</Button>
                <Button href="/contactos" variant="text">CONTACTOS</Button>
            </div>
          
        </div>
      )
}