import {useState} from 'react';
import {icons} from '../assets';
import {Button, ShoeCard} from '../components';
import {shoes, statistics} from '../constants';

export const Hero = () => {
  const [activeImg, setActiveImg] = useState(shoes[0].bigShoe);
  return (
    <section className="xl:padding-l wide:padding-r padding-b" id="home">
      <div className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
        <div className=" flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">
          <div className="relative xl:w-2/5 justify-center items-start flex flex-col w-full max-xl:padding-x pt-28">
            <p className="text-xl font-montserrat text-coral-red">
              Our Summer Collections
            </p>
            <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
              <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                The New Arrivals
              </span>
              <br />
              <span className="text-coral-red me-2 mt-3 inline-block">
                Nike
              </span>
              Shoes
            </h1>
            <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
              Discover stylish Nike arrivals, quality comfort, and innovation
              for your active life.
            </p>
            <Button label="Show now" icon={icons.arrowRight} />
            <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
              {statistics.map(state => (
                <div key={state.label}>
                  <p className="text-4xl font-palanquin font-bold">
                    {state.value}
                  </p>
                  <p className="leading-7 font-montserrat text-slate-gray">
                    {state.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
            <img
              src={activeImg}
              alt="big shoes image"
              width={610}
              height={540}
              className="object-contain relative z-10"
            />
            <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
              {shoes.map(shoe => (
                <div key={shoe.thumbnail}>
                  <ShoeCard
                    active={activeImg === shoe.bigShoe}
                    img={shoe.bigShoe}
                    onChange={setActiveImg}
                    thumbnail={shoe.thumbnail}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
