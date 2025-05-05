import { Card } from "flowbite-react";

export const ProductCard = ({
    img,
    heading,
    text,
}: {
    img: string;
    heading: string;
    text: string;
    }) => {
    

    return (
        <Card
            className="w-full  bg-secondary border-secondary" imgAlt="not available" imgSrc={img}>
            <h5 className="text-2xl font-bold tracking-tight text-accent">
                {heading}
            </h5>
            <p className="font-normal text-text">
                {text}
            </p>
        </Card>
    );
};