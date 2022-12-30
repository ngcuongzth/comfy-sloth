export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(number / 100)
}



export const getUniqueValues = (data, type) => {
    // data is all products 
    // type is condition filter
    const unique = data.map((item)=>{
        return item[type]
    })
    return ['all', ...new Set(unique)]
 
}