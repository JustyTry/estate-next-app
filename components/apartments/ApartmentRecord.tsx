import Image from 'next/image';
import Link from 'next/link';

const ApartmentRecord = (data: any) => {
  return (
    <div className="w-full h-96 shadow-sm border-2">
      <Link href="apartments/1">
        <div className="h-1/2 relative w-full">
          <Image src="/estate-example.jpg" fill sizes="100vw" alt="" />
        </div>
        <div className="h-1/2 flex flex-col justify-between px-6">
          <div className="text-2xl pt-4">{data.cost} руб.</div>
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
