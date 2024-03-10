import Image from 'next/legacy/image';
import sliderImg from '../carData';

const Explore = () => {
  return (
    <>
      <section className="exp_sec mb-24">
        <div className="container">
          <div className="common_heading text-center mb-16">
            <h3>Explore our Cars</h3>
          </div>
          <div className="row">
            {
              sliderImg.map(item => (
                <div className='col-md-3 my-3' key={item.key}>
                  <div className='bg-slate-200 shadow-md border-spacing-1 rounded-lg p-3'>
                    <div className="car_img">
                    <img src={item.image} alt={item.alt} className='md:w-100 md:h-100  md:object-cover object-contain'/>
                      {/* <Image src={item.image} alt={item.alt} width={100} height={100} layout='responsive' objectFit='contain' /> */}
                    </div>
                    <div className='car_title'>
                      <h5 className='text-center text-black pt-3'>{item.name}</h5>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </section>
    </>
  )
}

export default Explore