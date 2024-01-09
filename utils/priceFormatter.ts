export const priceFormatter = (price:number) =>{
    return new Intl.NumberFormat("it-IT",{
        style: "currency",
        currency:"EUR"
    }).format(price);
}