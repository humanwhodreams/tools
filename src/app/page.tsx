import { BellRing, ListTodo, Split, TimerReset } from "lucide-react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

import Link from "next/link";
import { SiteBrand } from "@/components/site-brand";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navs = [
  {
    label: "Todo",
    href: "/todo",
    icon: ListTodo,
  },
  {
    label: "Pomodoro",
    href: "/pomo",
    icon: TimerReset,
  },
  {
    label: "Timer",
    href: "/timer",
    icon: BellRing,
  },
  {
    label: "Workflow",
    href: "/workflow",
    icon: Split,
  },
];

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <section>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-4 col-span-2 p-6 rounded-md bg-muted">
            <SiteBrand />
            <div>
              <h1 className="font-bold text-4xl">lst.app</h1>
              <p className="text-sm text-muted-foreground">
                Todo, productivity and more.
              </p>
            </div>
          </div>
          {navs.map((nav, id) => {
            return (
              <Link
                key={id}
                href={nav.href}
                className={cn(
                  buttonVariants({ variant: "muted", className: "text-base" })
                )}
              >
                <nav.icon className="w-5 h-5 mr-2 text-muted-foreground" />
                {nav.label}
              </Link>
            );
          })}
          <a
            href="http://github.com/fromenoabasi/lst"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "ghost", className: "col-span-2" })
            )}
          >
            Contribute on <FaGithub className="ml-2 w-4 h-4" />
          </a>
          <a
            href="http://twitter.com/fromenoabasi"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "ghost", className: "col-span-2" })
            )}
          >
            Connect on <FaXTwitter className="ml-2 w-4 h-4" />
          </a>
          <div className="text-center mt-6 text-sm text-muted-foreground col-span-2 font-medium">Made with love in <span className="fi fi-ng rounded-sm"></span></div>
        </div>
      </section>
    </main>
  );
}
