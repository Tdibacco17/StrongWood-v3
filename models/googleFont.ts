import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '500', '700'],
    style: 'normal',
    preload: true,
    variable: '--font-Montserrat',
    display: 'swap'
})
