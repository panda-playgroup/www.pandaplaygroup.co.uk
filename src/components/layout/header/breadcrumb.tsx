import { FC } from "react";
import { Breadcrumb as FlowbiteBreadcrumb } from "flowbite-react";
import { Link } from "gatsby";

interface BreadcrumbProps {
    activeSection: string;
    current: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ activeSection, current }: BreadcrumbProps) => {
    return (
        <div className="pt-6 2xl:px-64 lg:px-48 md:px-24 px-12">
            <div className="2xl:flex 2xl:gap-36">
                <div className="self-center">
                    <FlowbiteBreadcrumb aria-label="Breadcrumbs">
                        <FlowbiteBreadcrumb.Item>
                            <Link to="/" aria-label="Home">
                                <svg
                                    className="w-5 h-5 text-slate-800"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                            </Link>
                        </FlowbiteBreadcrumb.Item>
                        <FlowbiteBreadcrumb.Item>
                            <span className="text-xl text-slate-800">{activeSection}</span>
                        </FlowbiteBreadcrumb.Item>
                        <FlowbiteBreadcrumb.Item>
                            <span className="text-xl text-slate-800">{current}</span>
                        </FlowbiteBreadcrumb.Item>
                    </FlowbiteBreadcrumb>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
