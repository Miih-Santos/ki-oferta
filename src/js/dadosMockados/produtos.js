const produtos = [
    {
        id:1,
        nome: "Café três corações",
        preco: 10.99,
        img: "https://www.atacadao.com.br/_next/image?url=https%3A%2F%2Fatacadaobr.vtexassets.com%2Farquivos%2Fids%2F1514021-200-auto%3Fwidth%3D200%26height%3Dauto%26aspect%3Dtrue&w=256&q=75",
        categoria: "bebidas"

    },
    {
        id:2,
        nome: "Café pilão",
        preco: 8.99,
        img: "https://www.atacadao.com.br/_next/image?url=https%3A%2F%2Fatacadaobr.vtexassets.com%2Farquivos%2Fids%2F1498255-200-auto%3Fwidth%3D200%26height%3Dauto%26aspect%3Dtrue&w=256&q=75",
        categoria: "bebidas"
    },
    {
        id:3,
        nome: "Café melitta",
        preco: 12.99,
        img: "https://www.atacadao.com.br/_next/image?url=https%3A%2F%2Fatacadaobr.vtexassets.com%2Farquivos%2Fids%2F1559964-200-auto%3Fwidth%3D200%26height%3Dauto%26aspect%3Dtrue&w=256&q=75",
        categoria: "bebidas"
    },
    {
        id:4,
        nome: "Café união",
        preco: 15.99,
        img: "https://www.atacadao.com.br/_next/image?url=https%3A%2F%2Fatacadaobr.vtexassets.com%2Farquivos%2Fids%2F1539266-200-auto%3Fwidth%3D200%26height%3Dauto%26aspect%3Dtrue&w=256&q=75",
        categoria: "bebidas"
    }, 
    {
        id:5,
        nome: "Desinfetante Pinho Sol",
        preco: 6.55,
        img: "https://www.atacadao.com.br/_next/image?url=https%3A%2F%2Fatacadaobr.vtexassets.com%2Farquivos%2Fids%2F1579936-200-auto%3Fwidth%3D200%26height%3Dauto%26aspect%3Dtrue&w=256&q=75",
        categoria: "limpeza"
    },
    {
        id:6,
        nome: "Sabonete Protex Ômega",
        preco: 21.9,
        img: "https://www.atacadao.com.br/_next/image?url=https%3A%2F%2Fatacadaobr.vtexassets.com%2Farquivos%2Fids%2F1580301-200-auto%3Fwidth%3D200%26height%3Dauto%26aspect%3Dtrue&w=256&q=75",
        categoria: "limpeza"
    },
    {
        id:7,
        nome: "Lava Roupas em Pó Brilhante",
        preco: 21.9,
        img: "https://www.atacadao.com.br/_next/image?url=https%3A%2F%2Fatacadaobr.vtexassets.com%2Farquivos%2Fids%2F1568533-200-auto%3Fwidth%3D200%26height%3Dauto%26aspect%3Dtrue&w=256&q=75",
        categoria: "limpeza"
    },
    {
        id:8,
        nome: "Carne Bovina Acém Porc Friboi Resf Preço por quilo na peça",
        preco: 51.48,
        img: "https://www.atacadao.com.br/_next/image?url=https%3A%2F%2Fatacadaobr.vtexassets.com%2Farquivos%2Fids%2F1568696-300-auto%3Fwidth%3D300%26height%3Dauto%26aspect%3Dtrue&w=384&q=75",
        categoria: "carnes"
    },
    {
        id:9,
        nome: "Carne Bovina Picanha Bordon Resf Fat Preço por quilo na peça",
        preco: 15.85,
        img: "https://www.atacadao.com.br/_next/image?url=https%3A%2F%2Fatacadaobr.vtexassets.com%2Farquivos%2Fids%2F1533380-300-auto%3Fwidth%3D300%26height%3Dauto%26aspect%3Dtrue&w=384&q=75",
        categoria: "carnes"
    },
    {
        id:10,
        nome: "Carne Bov Alcatra c Maminha Friboi Resf Preço por quilo na peça",
        preco: 55.9,
        img: "https://www.atacadao.com.br/_next/image?url=https%3A%2F%2Fatacadaobr.vtexassets.com%2Farquivos%2Fids%2F1517076-300-auto%3Fwidth%3D300%26height%3Dauto%26aspect%3Dtrue&w=384&q=75",
        categoria: "carnes"
    },
    {
        id:11,
        nome: "Carne Bovina Cozido ao Molho Friboi Resf Preço por quilo na peça",
        preco: 33.9,
        img: "https://www.atacadao.com.br/_next/image?url=https%3A%2F%2Fatacadaobr.vtexassets.com%2Farquivos%2Fids%2F1572190-300-auto%3Fwidth%3D300%26height%3Dauto%26aspect%3Dtrue&w=384&q=75",
        categoria: "carnes"
    },
    {
        id:12,
        nome: "Desodorante Aerossol Rexona Men Xtracool 200ml",
        preco: 18.9,
        img: "https://www.atacadao.com.br/_next/image?url=https%3A%2F%2Fatacadaobr.vtexassets.com%2Farquivos%2Fids%2F1562536-300-auto%3Fwidth%3D300%26height%3Dauto%26aspect%3Dtrue&w=384&q=75",
        categoria: "higiene"
    },
    {
        id:13,
        nome: "Sabonete Protex Ômega",
        preco: 21.9,
        img: "https://www.atacadao.com.br/_next/image?url=https%3A%2F%2Fatacadaobr.vtexassets.com%2Farquivos%2Fids%2F1580301-200-auto%3Fwidth%3D200%26height%3Dauto%26aspect%3Dtrue&w=256&q=75",
        categoria: "higiene"
    },
    {
        id:14,
        nome: "Papel Higiênico Neve Folha Dupla 30m LV 24 PG 21 rolos",
        preco: 51.9,
        img: "https://www.atacadao.com.br/_next/image?url=https%3A%2F%2Fatacadaobr.vtexassets.com%2Farquivos%2Fids%2F1524246-300-auto%3Fwidth%3D300%26height%3Dauto%26aspect%3Dtrue&w=384&q=75",
        categoria: "higiene"
    },
    {
        id:15,
        nome: "Sabonete Protex Ômega",
        preco: 21.9,
        img: "https://www.atacadao.com.br/_next/image?url=https%3A%2F%2Fatacadaobr.vtexassets.com%2Farquivos%2Fids%2F1580301-200-auto%3Fwidth%3D200%26height%3Dauto%26aspect%3Dtrue&w=256&q=75",
        categoria: "limpeza"
    },
    {
        id:16,
        nome: "Sabonete Protex Ômega",
        preco: 21.9,
        img: "https://www.atacadao.com.br/_next/image?url=https%3A%2F%2Fatacadaobr.vtexassets.com%2Farquivos%2Fids%2F1580301-200-auto%3Fwidth%3D200%26height%3Dauto%26aspect%3Dtrue&w=256&q=75",
        categoria: "limpeza"
    },

]

export default produtos