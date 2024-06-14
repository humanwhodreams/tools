import { BellRing, CircleArrowRight, ListTodo, Split, TimerReset } from "lucide-react";
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
    <main className="flex flex-col min-h-screen items-center md:justify-center p-2 sm:p-0">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex items-center gap-4 col-span-1 md:col-span-2 p-6 rounded-md bg-muted">
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
                  buttonVariants({
                    variant: "muted",
                    className: "text-base col-span-1",
                  })
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
              buttonVariants({
                variant: "ghost",
                className: "col-span-1 md:col-span-2",
              })
            )}
          >
            Contribute on <FaGithub className="ml-2 w-4 h-4" />
          </a>
          <a
            href="http://twitter.com/fromenoabasi"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "ghost",
                className: "col-span-1 md:col-span-2",
              })
            )}
          >
            Connect on <FaXTwitter className="ml-2 w-4 h-4" />
          </a>
          <div className="text-center mt-6 text-sm text-muted-foreground col-span-1 space-y-2 md:col-span-2 font-medium">
            Made with love in <span className="fi fi-ng rounded-sm"></span>
            <Link href="/inspo" className="flex items-center justify-center text-muted-foreground hover:text-primary transition-colors text-sm font-medium group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 rounded-md py-1">
              Inspiration
              <CircleArrowRight className="ml-2 w-4 h-4 group-hover:-rotate-45 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
