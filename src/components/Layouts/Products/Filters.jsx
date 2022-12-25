import styled from 'styled-components/macro'
import { useFilterContext } from '../../../context/filter_context'
import { getUniqueValues, formatPrice } from '../../../utils/helpers'

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      minPrice, 
      maxPrice,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    allProducts,
  } = useFilterContext()


  const categories = getUniqueValues(allProducts, 'category')
  const companies = getUniqueValues(allProducts, 'company')

  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>

          {/* search  */}
          <div className='form-control'>
            <input
              type='text'
              name='text'
              placeholder='search'
              className='search-input'
              value={text}
              onChange={(e)=>{
                updateFilters(e);
              }}
            />
          </div>

           {/* category */}
          <div className='form-control'>
            <h5>category</h5>
            <div>
              {categories.map((item, index) => {
                return (
                  <button
                    key={index}
                    type='button'
                    name='category'
                    
                    onClick={(e)=>{
                      updateFilters(e)
                    }}
                    className={`${
                      category === item.toLowerCase() ? 'active' : null
                    }`}
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          </div>

          {/* company */}

          <div className="form-control">
            <h5>company</h5>
            <div>
                {companies.map((item, index)=>{
                    return <button key={index}
                    type="button"
                    name="company"
                    value={company}
                    onClick={(e)=>{
                      updateFilters(e);
                    }}
                    className={`${
                        company === item.toLowerCase() ? 'active' : null
                      }`}
                    >
                        {item}
                    </button>
                })}
            </div>
          </div>
          
          {/* range price  */}
          <div className='form-control'>
            <h5>price</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={(e)=>{
                updateFilters(e)
              }}
            />
          </div>



          <div className='form-control shipping'>
            <label htmlFor='shipping'> free shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              checked={shipping}
              onChange={(e)=>{
                updateFilters(e)
              }}
            />
          </div>
        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}>
          {' '}
          clear filters
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters


