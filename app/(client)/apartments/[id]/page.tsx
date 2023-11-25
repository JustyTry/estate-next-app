import dynamic from 'next/dynamic';
import Image from 'next/image';

const MapComponent = dynamic(() => import('@/components/Map'), {
  ssr: false
});
const Page = () => {
  return (
    <div className="w-full flex justify-center ">

      <div className="w-8/12 max-xl:w-full flex justify-between">
        <div className="w-8/12">
          <h1 className=" text-4xl">2-комн. квартира, 53,3 м²</h1>
          <h2 className="text-md my-6 text-gray-600">
            Красноярский край, Красноярск, р-н Кировский, мкр. Первомайский, ул. Кутузова, 83А
          </h2>
          <div className="w-full box-border ">
            <Image
              className="w-full"
              src="/estate-example.jpg"
              width={700}
              height={400}
              sizes=""
              alt=""
            />
          </div>
          <ul className="grid grid-cols-3 gap-6 w-full my-8">
            <li className="flex flex-col">
              <span>Общая площадь</span>
              <span>53,3 м²</span>
            </li>
            <li className="flex flex-col">
              <span>Общая площадь</span>
              <span>53,3 м²</span>
            </li>
            <li className="flex flex-col">
              <span>Общая площадь</span>
              <span>53,3 м²</span>
            </li>
            <li className="flex flex-col">
              <span>Общая площадь</span>
              <span>53,3 м²</span>
            </li>
            <li className="flex flex-col">
              <span>Общая площадь</span>
              <span>53,3 м²</span>
            </li>
          </ul>
          <p>
            Квартира полностью готова к сделке, любая форма расчёта. Дом стоит в прекрасной локации,
            где имеется инфраструктура, детский сад в трех минутах, салон красоты, магазины,
            отличная транспортная развязка. О квартире: светлая, средний этаж, теплая, с раздельным
            санузлом, что для семьи часто крайне важно, комнаты раздельные. В прихожей достаточно
            места для большого вместительного шкафа, а комнаты правильной формы дают возможность
            расставить мебель практично и комфортно для жизни. Вся сумма в договоре, один
            собственник, никто не прописан. фото квартиры соответствуют действительности.
          </p>
          <div className="w-full flex justify-between gap-x-24 mt-8">
            <div className="w-1/2">
              <h2 className="text-2xl font-semibold mb-8">О квартире</h2>
              <ul className="w-full flex flex-col text-lg text-gray-500 gap-y-4">
                <li className="w-full flex justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
                  <span> Вторичка</span>
                </li>
                <li className="w-full flex justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
                  <span> Вторичка</span>
                </li>
                <li className="w-full flex justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
                  <span> Вторичка</span>
                </li>
                <li className="w-full flex justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
                  <span> Вторичка</span>
                </li>
                <li className="w-full flex justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
                  <span> Вторичка</span>
                </li>
                <li className="w-full flex justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
                  <span> Вторичка</span>
                </li>
                <li className="w-full flex justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
                  <span> Вторичка</span>
                </li>
                <li className="w-full flex justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
                  <span> Вторичка</span>
                </li>
                <li className="w-full flex justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
                  <span> Вторичка</span>
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl font-semibold mb-8">О доме</h2>
              <ul className="w-full flex flex-col text-lg text-gray-500 gap-y-4">
                <li className="w-full flex justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
                  <span> Вторичка</span>
                </li>
                <li className="w-full flex justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
                  <span> Вторичка</span>
                </li>
                <li className="w-full flex justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
                  <span> Вторичка</span>
                </li>
                <li className="w-full flex justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
                  <span> Вторичка</span>
                </li>
                <li className="w-full flex justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
                  <span> Вторичка</span>
                </li>
                <li className="w-full flex justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
                  <span> Вторичка</span>
                </li>
                <li className="w-full flex justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
                  <span> Вторичка</span>
                </li>
                <li className="w-full flex justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
                  <span> Вторичка</span>
                </li>
                <li className="w-full flex justify-between whitespace-nowrap">
                  <span>Тип жилья</span>
                  <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
                  <span> Вторичка</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-red-200 w-full h-96 my-32 overflow-hidden"><MapComponent /></div>
        </div>
        <div className="w-3/12 pt-5 px-8 border-2">
          <h1 className="text-3xl font-semibold mb-8">5 800 000 ₽</h1>
          <ul className="w-full flex flex-col text-lg text-gray-500 gap-y-4">
            <li className="w-full flex justify-between whitespace-nowrap text-sm">
              <span>Цена за метр</span>
              <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
              <span>108 818 ₽/м²</span>
            </li>
            <li className="w-full flex justify-between whitespace-nowrap text-sm">
              <span>Условия сделки</span>
              <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
              <span>свободная продажа</span>
            </li>
            <li className="w-full flex justify-between whitespace-nowrap text-sm">
              <span>Ипотека</span>
              <span className="w-full border-b-2 border-dotted mb-2 mx-3"></span>
              <span>возможна</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
