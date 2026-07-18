import { PageHeader } from "@/components/shared/page-header";
import { DesignSystemJumpNav } from "@/components/design-system/jump-nav";
import { ColorPaletteSection } from "@/components/design-system/color-palette-section";
import { TypographySection } from "@/components/design-system/typography-section";
import { ButtonsSection } from "@/components/design-system/buttons-section";
import { CardsSection } from "@/components/design-system/cards-section";
import { TableSection } from "@/components/design-system/table-section";
import { InputsSection } from "@/components/design-system/inputs-section";
import { ModalSection } from "@/components/design-system/modal-section";
import { BadgeAvatarSection } from "@/components/design-system/badge-avatar-section";
import { StatusChipSection } from "@/components/design-system/status-chip-section";
import { SidebarStylesSection } from "@/components/design-system/sidebar-styles-section";

export default function DesignSystemPage() {
  return (
    <>
      <PageHeader
        title="Design system"
        description="The tokens and components that make up HireIQ AI — built to read like Linear, Stripe, and Notion: restrained color, clear type hierarchy, and generous whitespace."
      />

      <DesignSystemJumpNav />

      <div className="space-y-12">
        <ColorPaletteSection />
        <TypographySection />
        <ButtonsSection />
        <CardsSection />
        <TableSection />
        <InputsSection />
        <ModalSection />
        <BadgeAvatarSection />
        <StatusChipSection />
        <SidebarStylesSection />
      </div>
    </>
  );
}
