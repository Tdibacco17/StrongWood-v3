import { NextRequest, NextResponse } from "next/server";

const kitchenSlugs = ["cocina-nova", "cocina-new-york", "cocina-premium", "cocina-nordica", "cocina-vison", "cocina-escandinavo"]
const otherSlugs = ["vajillero-new-york", "recibidor-london", "rack-tv-london", "escritorio-nova", "cama-matrimonial-nova"]
const bathroomSlugs = ["vanitory-nordico", "vanitory-new-york", "vanitory-escandinavo", "vanitory-premium"]
const closetSlugs = ["vestidor-deluxe", "vestidor-nordico", "placar-urbanwood", "vestidor-premium"]
const localSlugs = ["farina-e-pane", "gorila-fitness", "timo-online", "noviembre-cafe"]
const productSlugs = ["estanteria-avila", "maceta-avinon", "porta-vinos", "estanteria-bath", "mesa-cracovia",
    "mesa-ratona-edimburgo", "maceta-sintra", "estanteria-siena", "llavero-corfu", "leniero", "rack-tv-cordoba",
    "toallero-matera", "toallero-cuenca", "bodega-segovia", "mesa-de-luz-roma", "escritorio-brujas", "perchero-oporto",
    "recibidor-salamanca", "tabla-asado", "soporte-auricular"]
const projectSlugs = ["kitchen", "bathroom", "closet", "local", "others", "products"]

export function middleware(request: NextRequest) {
    const { pathname, searchParams } = new URL(request.url);
    //projects details
    if (pathname.startsWith("/kitchen/")) {
        const kitchenSlug = pathname.replace("/kitchen/", "");
        const kitchenExists = kitchenSlugs.includes(kitchenSlug);

        if (!kitchenExists) {
            return NextResponse.redirect(new URL("/projects", request.url));
        }
    }
    if (pathname.startsWith("/others/")) {
        const otherSlug = pathname.replace("/others/", "");
        const otherExists = otherSlugs.includes(otherSlug);

        if (!otherExists) {
            return NextResponse.redirect(new URL("/projects", request.url));
        }
    }
    if (pathname.startsWith("/bathroom/")) {
        const bathroomSlug = pathname.replace("/bathroom/", "");
        const bathroomExists = bathroomSlugs.includes(bathroomSlug);

        if (!bathroomExists) {
            return NextResponse.redirect(new URL("/projects", request.url));
        }
    }
    if (pathname.startsWith("/closet/")) {
        const closetSlug = pathname.replace("/closet/", "");
        const closetExists = closetSlugs.includes(closetSlug);

        if (!closetExists) {
            return NextResponse.redirect(new URL("/projects", request.url));
        }
    }
    if (pathname.startsWith("/local/")) {
        const localSlug = pathname.replace("/local/", "");
        const localExists = localSlugs.includes(localSlug);

        if (!localExists) {
            return NextResponse.redirect(new URL("/projects", request.url));
        }
    }
    if (pathname.startsWith("/products/")) {
        const productSlug = pathname.replace("/products/", "");
        const productExists = productSlugs.includes(productSlug);

        if (!productExists) {
            return NextResponse.redirect(new URL("/projects", request.url));
        }
    }
    //all projects
    if (pathname.startsWith("/projects/")) {
        const projectsSlug = pathname.replace("/projects/", "");
        const projectsExists = projectSlugs.includes(projectsSlug);

        if (!projectsExists) {
            return NextResponse.redirect(new URL("/projects", request.url));
        }
    }
    //path luego de /contact
    if (pathname.startsWith("/contact/")) {
        const additionalPath = pathname.replace("/contact/", "");

        if (additionalPath) {
            return NextResponse.redirect(new URL("/contact", request.url));
        }
    }
    return NextResponse.next();
}