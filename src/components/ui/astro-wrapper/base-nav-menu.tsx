import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

interface BaseNavMenuProps {
  menu: {
    id: string;
    label: string;
    href: string;
  }[];
}

export const BaseNavMenu = ({ menu }: BaseNavMenuProps) => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {menu.map(({ label, href, id }) => (
          <NavigationMenuItem key={id}>
            <NavigationMenuLink href={href}>
              {id} {label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
