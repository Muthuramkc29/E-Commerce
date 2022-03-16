import React from "react";
import CategoryFlex from "../../Components/Category/CategoryFlex/CategoryFlex";
import CategoryHeader from "../../Components/Category/CategoryHeader/CategoryHeader";
import AboveFooterFlex from "../../Components/Layout/AboveFooterFlex/AboveFooterFlex";

// For Category Flex
import earphoneProd from "../../Images/image-product-earphone.jpg";
import earphoneProdTablet from "../../Images/image-product-earphone-tablet.jpg";
import earphoneProdDesktop from "../../Images/image-product-earphone-desktop.jpg";

// For CategoryCard
import headphone from "../../Images/image-category-thumbnail-headphones.png";
import speaker from "../../Images/image-category-thumbnail-speakers.png";
import earphoneCategory from "../../Images/image-category-thumbnail-earphones.png";
import CategoryCard from "../../Components/Category/CategoryCard/CategoryCard";

function CategoryEarphones() {
  return (
    <div>
      <CategoryHeader category="earphones" />
      <CategoryFlex
        position="left"
        prodName="YX1 WIRELESS
        EARPHONES"
        imgMob={earphoneProd}
        imgTab={earphoneProdTablet}
        imgDesktop={earphoneProdDesktop}
        newProd="true"
      />

      {/* Category Card Home */}

      <div className="px-6 md:px-12 xl:px-40 md:flex gap-3 justify-evenly">
        <CategoryCard img={headphone} name="headphones" />
        <CategoryCard img={speaker} name="speaker" />
        <CategoryCard img={earphoneCategory} name="earphones" />
      </div>

      <AboveFooterFlex />
    </div>
  );
}

export default CategoryEarphones;
