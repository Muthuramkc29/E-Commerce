import React, { useEffect } from "react";
import CategoryFlex from "../../Components/Category/CategoryFlex/CategoryFlex";
import CategoryHeader from "../../Components/Category/CategoryHeader/CategoryHeader";
import AboveFooterFlex from "../../Components/Layout/AboveFooterFlex/AboveFooterFlex";

// For Category Flex
// import speakerProd from "../../Images/image-product-speaker-zx9.jpg";
// import speakerProdTablet from "../../Images/image-product-speakers-zx9-tablet.jpg";
// import speakerProdDesktop from "../../Images/image-product-speakers-zx9-desktop.jpg";

// import speakerzx7Prod from "../../Images/image-product-speakers-zx7.jpg";
// import speakerzx7ProdTablet from "../../Images/image-product-speakers-zx7-tablet.jpg";
// import speakerzx7ProdDesktop from "../../Images/image-product-speakers-zx7-desktop.jpg";

// For CategoryCard
import headphone from "../../Images/image-category-thumbnail-headphones.png";
import speaker from "../../Images/image-category-thumbnail-speakers.png";
import earphoneCategory from "../../Images/image-category-thumbnail-earphones.png";
import CategoryCard from "../../Components/Category/CategoryCard/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api/axiosConfig";
import { setProducts } from "../../redux/reducers/userReducers";

function CategorySpeakers() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.user.products);

  useEffect(() => {
    const retriveEarphones = async () => {
      const response = await api.get("speakers/");
      // console.log(response.data);
      dispatch(setProducts(response.data));
    };
    retriveEarphones();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [dispatch]);

  console.log(products);

  return (
    <div>
      <CategoryHeader category="speakers" />

      <CategoryFlex products={products} />
      {/* Category Card Home */}

      <div className="px-6 md:px-12 xl:px-40 md:flex gap-5 justify-between">
        <div className="md:w-4/12">
          <CategoryCard img={headphone} name="headphones" to="/headphones" />
        </div>
        <div className="md:w-4/12">
          <CategoryCard img={speaker} name="speakers" to="/speakers" />
        </div>
        <div className="md:w-4/12">
          <CategoryCard
            img={earphoneCategory}
            name="earphones"
            to="/earphones"
          />
        </div>
      </div>

      <AboveFooterFlex />
    </div>
  );
}

export default CategorySpeakers;
