import Image from "next/image";
import Link from "next/link";

function Logo() {
    return (
        <Link href="/">
            <Image src="/images/logo.png" alt="sector logo" width={173} height={56.08241653442383} />
        </Link>
    );
}

export default Logo;
