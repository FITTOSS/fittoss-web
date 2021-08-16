import Image from "next/image";

export default function Logo() {
    return <Image src="/images/fittoss_logo.png" width={233} height={60}
                  style={{
                      boxShadow: '0px 3px 6px #00000029',
                      opacity: 1,
                  }} />;
}