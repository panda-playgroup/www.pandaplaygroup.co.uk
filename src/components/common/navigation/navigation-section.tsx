import { FC } from "react";
import { Link } from "gatsby";
import { Dropdown } from "flowbite-react";
import NavigationItem from "@/components/common/navigation/navigation-item";

interface NavigationSectionProps {
    title: string;
    menuItems: NavigationMenuItem[];
    activeSection?: string;
}

interface NavigationMenuItem {
    title: string;
    href: string;
}

const NavigationSection: FC<NavigationSectionProps> = ({ title, menuItems, activeSection }: NavigationSectionProps) => {
    return (
        <Dropdown inline className="width-full" label={<NavigationItem text={title} activeSection={activeSection} />}>
            {menuItems.map((menuItem: NavigationMenuItem) => (
                <Dropdown.Item key={menuItem.title} className="text-xl">
                    <Link to={menuItem.href}>{menuItem.title}</Link>
                </Dropdown.Item>
            ))}
        </Dropdown>
    );
};

export default NavigationSection;
