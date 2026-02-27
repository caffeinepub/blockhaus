# Specification

## Summary
**Goal:** Expand product listings to show multiple items per category and add an editorial three-panel category showcase section on the homepage.

**Planned changes:**
- Add at least 3 products under Tufted Border Mirrors, at least 3 under Tufted Rugs, at least 3 under Tufted Pillow Cases, and at least 2 under Tufted Mirror Rug in `frontend/src/data/products.ts`, each with a unique name, description, price, and product image
- Update the ProductsPage and category filtering/display logic to show all individual products per category
- Add a full-width three-panel editorial category showcase section on the homepage (Home.tsx) placed below the "OUR COLLECTION" product grid
- Each panel features a tall full-bleed background image, a bold uppercase editorial headline (e.g., "DEFINE YOUR SPACE", "GROUND YOUR ROOM", "REST YOUR HEAD"), and a minimal outlined CTA button linking to the relevant filtered category page
- Layout is 3 columns on desktop and stacks to a single column on mobile
- All styling follows the existing Bauhaus design system (uppercase bold typography, clean borders, brand color palette)

**User-visible outcome:** Visitors can browse multiple distinct products under each category, and the homepage now features an editorial three-panel showcase below the collection grid, linking directly to each product category.
