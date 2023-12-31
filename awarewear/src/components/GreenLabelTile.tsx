import Image from "next/image";
import Link from "next/link";

type GreenLabel = {
  storeName: string;
  category: string[];
  for: string[];
  from: string;
  priceRange: string;
  values: string[];
  link: string;
  image: string;
};

export default function GreenLabelTile({ label }: { label: GreenLabel }) {
  return (
    <Link href={label.link} target="_blank">
      <div className="flex items-center justify-between w-full min-h-fit flex-row h-36 p-2 mb-8 bg-white border border-gray-200 rounded-md shadow-md hover:bg-gray-100">
        <div className="flex items-center justify-center w-1/3 mr-4 rounded">
          <Image
            src={`/logos/${label.image}`}
            width={80}
            height={80}
            alt="logo"
            className="rounded"
          />
        </div>
        <div className="flex flex-col justify-evenly h-full w-2/3">
          <h2 className="text-lg font-bold ">{label.storeName}</h2>
          <p className="text-xs w-full mb-1 text-gray-400">
            <span className="font-bold">Category: </span>
            {label.category.map((category, index) => (
              <span key={category} className="">
                {category + (index === label.category.length - 1 ? "" : ", ")}
              </span>
            ))}
          </p>
          <p className="text-xs w-full text-gray-400">
            <span className="font-bold">For: </span>
            {label.for.map((forItem, index) => (
              <span key={forItem} className="">
                {forItem + (index === label.for.length - 1 ? "" : ", ")}
              </span>
            ))}
          </p>
        </div>
      </div>
    </Link>
  );
}
