import { FC } from "react";
import { Link } from "gatsby";
import { Dropdown, DropdownItem } from "flowbite-react";
import NavigationItem from "@/components/layout/header/navigation-item";

interface NavigationSectionProps {
    title: string;
    href?: string;
    menuItems?: NavigationMenuItem[];
    activeSection?: string;
}

interface NavigationMenuItem {
    title: string;
    href: string;
    isExternal?: boolean;
}

const NavigationSection: FC<NavigationSectionProps> = ({
    title,
    href,
    menuItems,
    activeSection,
}: NavigationSectionProps) => {
    const navigationItem = <NavigationItem text={title} href={href} activeSection={activeSection} />;

    return href ? (
        navigationItem
    ) : (
        <Dropdown inline className="width-full" label={navigationItem}>
            {menuItems?.map((menuItem: NavigationMenuItem) => (
                <MenuItemLink
                    key={menuItem.title}
                    title={menuItem.title}
                    href={menuItem.href}
                    isExternal={menuItem.isExternal}
                />
            ))}
        </Dropdown>
    );
};

const MenuItemLink: FC<NavigationMenuItem> = ({ title, href, isExternal }: NavigationMenuItem) => {
    return isExternal ? (
        <a href={href} className="no-underline" target="_blank" rel="noreferrer">
            <DropdownItem className="text-xl">{title}</DropdownItem>
        </a>
    ) : (
        <Link to={href} className="no-underline">
            <DropdownItem className="text-xl">{title}</DropdownItem>
        </Link>
    );
};

export default NavigationSection;
