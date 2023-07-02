export type typeProps = {

    children: ReactNode;
}

export type CartItems = { [key: string]: number };


export type ShopContextValue = {

    card: CartItems
    addToCard: (id: any) => any
    removeToCard: (id: any) => any
    getTotalItems: () => number
}