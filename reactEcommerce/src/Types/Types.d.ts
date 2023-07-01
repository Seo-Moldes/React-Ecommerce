export type typeProps = {

    children: ReactNode;
}
export type CartItems = { [key: string]: number };

export type ShopContextValue = {
    
    card: any
    addToCard: (id: any) => any
}