import Image from "next/image";
import Link from "next/link";

const ApartmentRecord = (data: any) => {
  return (
    <div className="h-96 w-full border-2 shadow-sm">
      <Link href={`apartments/${data.id}`}>
        <div className="relative h-1/2 w-full">
          <Image src="/estate-example.jpg" fill sizes="100vw" alt="" />
        </div>
        <div className="flex h-1/2 flex-col justify-between px-6">
          <div className="pt-4 text-2xl">{data.cost} руб.</div>
          <ul className="flex justify-between text-lg">
            <li>{data.square}</li>
            <li>{data.floor}</li>
            <li>{data.rooms_amount}</li>
          </ul>
          <div className="pb-1">Менжинского 60, 133</div>
        </div>
      </Link>
    </div>
  );
};

export default ApartmentRecord;
