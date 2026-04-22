import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
export default function Navbar() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <Link href="/login">Blog</Link>
      </MenubarMenu>
      <HoverCard openDelay={100} closeDelay={100}>
        <HoverCardTrigger asChild>
          <Button variant="outline" className="capitalize">
           Login
          </Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex flex-col gap-1">
            <h4 className="font-medium">Hover Card</h4>
          </div>
        </HoverCardContent>
      </HoverCard>
    </Menubar>
  );
}
