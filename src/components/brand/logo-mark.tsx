import { MessageSquare } from "lucide-react";

import { brandLogoBoxClass } from "@/lib/brand";
import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  iconClassName?: string;
}

export function LogoMark({ className, iconClassName }: LogoMarkProps) {
  return (
    <div className={cn(brandLogoBoxClass, className)}>
      <MessageSquare className={cn("h-4 w-4", iconClassName)} />
    </div>
  );
}
