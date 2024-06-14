import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  className?: string
}

export function SiteBrand({className}:Props) {
  return (
    <Image
      src={"/logo.svg"}
      alt="LST Logo from Logoipsum"
      width={0}
      height={0}
      className={cn("w-20 h-auto object-contain", className)}
      priority
    />
  );
}
