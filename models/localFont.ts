import localFont from "next/font/local";
export const myFont = localFont({
    src: [
        {
            path: '../public/assets/fonts/Acumin-Pro-Italic-Bold.otf',
            weight: '400',
            style: 'italic'
        },
        {
            path: '../public/assets/fonts/Acumin-Pro-Italic-Regular.otf',
            weight: '300',
            style: 'italic'
        },
        {
            path: '../public/assets/fonts/Acumin-Pro-Normal-Bold.otf',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../public/assets/fonts/Acumin-Pro-Normal-Regular.otf',
            weight: '300',
            style: 'normal'
        }
    ],
})