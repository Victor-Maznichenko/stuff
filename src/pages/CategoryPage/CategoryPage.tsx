import BannerMain from "../../components/BannerMain/BannerMain";
import CatalogCategory from "../../components/CatalogCategory/CatalogCategory";

const CategoryPage = () => {
    return (
        <>
            <BannerMain/>
            <CatalogCategory amount={10} />
        </>
    );
};

export default CategoryPage;