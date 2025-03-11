import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BaseSheetMenuProps {
  menu: {
    id: string;
    label: string;
    href: string;
  }[];
}
export const BaseSheetMenu = ({ menu }: BaseSheetMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} className="md:hidden">
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-background/15 backdrop-blur-sm">
        <SheetHeader className="sr-only">
          <SheetTitle>Space Tourism Menu</SheetTitle>
          <SheetDescription>
            Select a option to navigate between pages
          </SheetDescription>
        </SheetHeader>
        <NavigationMenu
          orientation="vertical"
          className="items-start mt-16 max-w-4/5"
        >
          <NavigationMenuList className="flex-col font-barlow-condensed tracking-biggest text-base leading-5 items-start gap-8">
            {menu.map(({ label, href, id }) => (
              <NavigationMenuItem key={id}>
                <NavigationMenuLink
                  className="p-0 flex flex-row w-full"
                  href={href}
                >
                  <span className="font-bold w-max">{id}</span> {label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
};
