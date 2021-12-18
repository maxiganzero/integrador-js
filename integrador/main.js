const totalItems = document.getElementById( 'totalItems'
const totalTickets = document.getElementById( 'totalTickets')
const cartWrapper = document.getElementById( 'cartWrapper')

let tickets = []

const setCount = () => {
    let totalCount = 0

    for(let item in tickets){
        totalCount += tickets[item].count
    }

    totalItems.innerText = totalCount.toString()
    return totalCount
}

const totalPrice = () => {
    let totalCart = 0

    for(let item in tickets){
        totalCart += products[item].price * tickets[item].count
    }

    totalTickets.innerText = totalCart.toString()
    return totalCart
}

/*const ticketsList = () => {
    cartWrapper.innerHTML = tickets.map(ticket => {
        return 


    })
}*/

const addProduct = (ticket, price, count) => {
   for(let item in tickets) {
        if(tickets[item].ticket === ticket){
            tickets[item].count ++
            setCount()
            totalPrice()
            ticketsList()
            return
        }
    } 

    tickets.push({ ticket: ticket, price: price, count:count});
    setCount()
    totalPrice()
    ticketsList()
    
}