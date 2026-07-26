import { Metadata } from "next";
import { SolutionsDirectory } from "./solutions-client";

export const metadata: Metadata = {
  title: "100+ Ready Business Solutions & IT Architectures",
  description:
    "Explore 100+ turnkey software solutions, AI workflows, CRM portals, e-commerce engines, and mobile apps engineered by iInfynite to solve real business problems and scale operations.",
};

export default function SolutionsPage() {
  return <SolutionsDirectory />;
}
