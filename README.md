# Design Decisions
- Used **Dawn as the base theme** to speed up development by reusing its built-in components.
- Added a **simple SCSS workflow** to improve styling speed and maintainability.
- Replaced Dawn’s default slider with **Swiper.js** for better control and easier customization of the product media carousel.
- Implemented **metaobjects for product recommendations** to allow better product grouping and reusability across multiple products.
- Used the **default color swatch for the `Metal` variant** to easily add custom image.
- Made the **two new Shopify sections fully customizable** in the Theme Editor to make future content updates easier for merchants.

# Metafield / Metaobject Configurations
1. Created a metaobject definition: **`Product Recommendations`**  
   Fields:
   - **Title** (single-line text)  
   - **Products** (list of product reference fields)

2. Added a **Product Metafield**:  
   - `custom.recommended_products` – references the `Product Recommendations` metaobject

3. Added a **Product Metafield**:  
   - `custom.delivery_estimate` – for dynamic estimated delivery messaging

# Challenges Faced
- Designing a clean metafield/metaobject system so merchants can manage recommendations easily
- Deciding the most reliable way to attribute images for the **`Metal`** and **`Finish`** variants.
- Integrating Swiper.js while ensuring it works smoothly with Dawn's theme variant change behavior.
- The Figma design included a video/GIF for the **“Add Your Personal Touch”** section, but due to export limitations, I can only export one image.

# Local Setup

## Install Dependencies
```bash
npm install
```

## Development Command
Make sure to replace THEME_ID with your actual development theme ID.
```bash
npm run dev -- --store technical-assessment-2 --theme THEME_ID --live-reload full-page
```