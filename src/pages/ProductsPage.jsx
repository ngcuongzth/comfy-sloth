import styled from "styled-components/macro";
import PageHero from '../components/PageHero'
import Sort from "../components/Layouts/Products/Sort";
import ProductList from "../components/Layouts/Products/ProductList";
import Filters from '../components/Layouts/Products/Filters'

const ProductsPage = () => {
    return (
        <main>
            <PageHero title='products' />
            <Wrapper className='page'>
                <div className='section-center products'>
                    <Filters />
                    <div>
                        <Sort />
                        <ProductList />
                    </div>
                </div>
            </Wrapper>
        </main>
    )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage