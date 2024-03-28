let elCart = document.querySelector(".card");

let products = [
{
    id:1,
    title:"Doğu Karadeniz DağlarındaBisikletle Geziyoruz #100",
}
]

products.map(((item) => {
    return (
        elCart.innerHTML +=   `
            <div>
            <h1>${item.title}</h1>
            </div
        ` 
    )
        
}))