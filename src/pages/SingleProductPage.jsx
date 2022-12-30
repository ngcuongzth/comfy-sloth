import { useEffect, } from "react";
import { useParams, useNavigate, Link } from "react-router-dom"
import { useProductsContext } from "../context/products_context"
import styled from "styled-components/macro"
import PageHero from '../components/PageHero'
import Loading from '../components/Loading'
import ProductImages from "../components/Layouts/SingleProduct/ProductImages";
import Stars from '../components/Layouts/SingleProduct/Stars'
import { formatPrice } from '../utils/helpers'
import AddToCart from "../components/Layouts/SingleProduct/AddToCart";

const SingleProductPage = () => {
  const { getSingleProduct, singleProduct,
    singleProductLoading: loading, singleProductError: error,
  } = useProductsContext();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleProduct(id)
    // eslint-disable-next-line
  }, [id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/")
      }, 3000)
    }
    // eslint-disable-next-line
  }, [error])
  const { name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images } = singleProduct

  if (loading) {
    return <Loading />
  }
  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className=' product-center'>
          <ProductImages images={images} />
          <section className='content'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className='price'> {formatPrice(price)}</h5>
            <p className='desc'> {description}</p>
            <p className='info'>
              <span>Available : </span>
              {stock > 0 ? `In stock - ${stock} items` : 'out of stock'}
            </p>
            <p className='info'>
              <span>ID : </span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage