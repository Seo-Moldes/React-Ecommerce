export type typeProps = {

    children: ReactNode;
}

export type CartItems = { [key: string]: number };


export type ShopContextValue = {

    card: CartItems
    addToCard: (id: number) => void
    removeToCard: (id: number) => void
    getTotalItems: () => number
    addPrice: () => number
    loged: boolean
    setloged: (id:boolean) => void

}

export interface CardImgProps {

img: string;
id: number;
name: string;
price: number

}

