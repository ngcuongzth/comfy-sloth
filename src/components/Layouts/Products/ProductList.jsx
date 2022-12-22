import GridView from "./GridView"
import ListView from "./ListView"
import { useFilterContext } from "../../../context/filter_context"
const ProductList = () => {
    const { filteredProducts: products, gridView } = useFilterContext();

    if (products.length < 1) {
        return (
            <h5 style={{ textTransform: 'none' }}>
                Sorry, no products matched your search...
            </h5>
        )
    }
    if (gridView) {
        return <GridView products={products} />
    }
    return (
        <ListView products={products} />
    )
}

export default ProductList