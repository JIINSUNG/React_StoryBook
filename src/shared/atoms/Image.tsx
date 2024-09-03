import { twMerge } from "tailwind-merge";

export type ImageProps = {
    src: string;
    label?: string;
    shape?: "circle" | "square";
    size?: "logo" | "avatar";
};

export const sizeStyle = {
    avatar: "w-12 h-12",
    logo: "w-24 h-24",
};

export const shapeStyle = {
    circle: "rounded-full",
    square: "rounded-none",
};

const Image: React.FC<ImageProps> = ({
    src,
    label,
    size = "logo",
    shape = "circle",
}) => {
    return (
        <div className="flex flex-col items-center">
            <img
                src={src}
                alt={label ?? "Image"}
                className={twMerge(
                    sizeStyle[size],
                    "object-cover",
                    shapeStyle[shape]
                )}
            />
            {label && <span className="mt-2 text-center">{label}</span>}
        </div>
    );
};

export default Image;
