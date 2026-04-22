import { FC } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import NavigationSection from "@/components/layout/header/navigation-section";
import LinkButton from "@/components/common/link-button";
import { usePandaAndParentAgreement } from "@/queries/layout/header/use-panda-and-parent-agreement";
import { useProspectus } from "@/queries/layout/header/use-prospectus";

interface NavigationProps {
    activeSection?: string;
}

const Navigation: FC<NavigationProps> = ({ activeSection }: NavigationProps) => {
    const pandaAndParentAgreement = usePandaAndParentAgreement();
    const prospectus = useProspectus();

    return (
        <Navbar
            fluid
            className="border-b-4 border-green min-h-42 relative z-20"
            theme={{
                root: {
                    inner: { base: "mx-3 flex flex-wrap items-center justify-between gap-y-5 gap-x-5 xl:pb-0 pb-4" },
                },
            }}
        >
            <NavbarBrand as="div">
                <Link to="/" className="flex items-center w-full gap-x-10 no-underline">
                    <StaticImage src="../../../images/logo.png" alt="" aria-hidden width={125} height={125} />
                    <h1 className="font-sofia-pro-soft-bold text-2xl 2xl:text-3xl">Panda Preschool Playgroup</h1>
                </Link>
            </NavbarBrand>
            <NavbarCollapse className="order-1">
                <NavigationSection
                    title="Sessions"
                    menuItems={[
                        { title: "Our pre-school", href: "/sessions/pre-school" },
                        { title: "Stay and play", href: "/sessions/stay-and-play" },
                    ]}
                    activeSection={activeSection}
                />
                <NavigationSection
                    title="New Pandas"
                    menuItems={[
                        { title: "Settling in", href: "/new-pandas/settling-in" },
                        { title: "Prospectus", href: prospectus?.url ?? "#", isExternal: true },
                        {
                            title: "Panda and Parent Agreement",
                            href: pandaAndParentAgreement?.url ?? "#",
                            isExternal: true,
                        },
                        { title: "Our fees", href: "/new-pandas/fees" },
                        { title: "Policies", href: "/new-pandas/policies" },
                    ]}
                    activeSection={activeSection}
                />
                <NavigationSection
                    title="Our approach"
                    menuItems={[
                        { title: "Aims", href: "/our-approach/aims" },
                        { title: "Green Panda", href: "/our-approach/green-panda" },
                    ]}
                    activeSection={activeSection}
                />
                <NavigationSection
                    title="Funding"
                    menuItems={[
                        { title: "Charity model", href: "/funding/charity-model" },
                        { title: "Fundraising", href: "/funding/fundraising" },
                        { title: "Panda Pals", href: "/funding/panda-pals" },
                    ]}
                    activeSection={activeSection}
                />
                <NavigationSection
                    title="Our team"
                    menuItems={[
                        { title: "Staff", href: "/our-team/staff" },
                        { title: "Committee", href: "/our-team/committee" },
                    ]}
                    activeSection={activeSection}
                />
            </NavbarCollapse>
            <div className="flex md:order-2 w-full md:w-auto justify-between">
                <LinkButton text="Apply" href="/apply" />
                <NavbarToggle
                    theme={{
                        base: "inline-flex items-center hover:text-green-light text-sm md:hidden",
                    }}
                />
            </div>
        </Navbar>
    );
};

export default Navigation;
