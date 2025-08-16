import shoes from '../assets/shoes.jpg'

function Card() {
    
  return (
    <>
      <div className="card bg-light lg:w-[340px] md:w-[340px] w-[310px] rounded-3xl relative overflow-hidden shadow-2xl shadow-hover/30 transition-all delay-100 duration-300  hover:translate-y-[-8px] hover:translate-x-[-8px] hover:rotate-[4deg] ">
        <img src={shoes} className="card-img-top rounded-t-3xl w-full h-[270px]" alt="Nike shoes" ></img>
        <p className='absolute top-5 start-[-34px] bg-hover text-white px-12 py-2 text-sm font-bold animate-mypulse'>20% OFF</p>
        <p className='absolute top-4 end-3 text-hover bg-bghover px-3 py-1 rounded-3xl text-xs font-bold'>Limited Edition</p>
        <div className="card-body py-4 p-5">
          <h2 className="card-title  lg:text-[1.4rem] md:text-[1.4rem] text-[1.2rem] font-bold text-header py-2 ">Nike Air Max Ultra Orange</h2>
          <p className=' pt-1 pb-3'> 
            <span className="text-hover pe-4 text-[1.1rem] font-bold">EGP 1839</span>
            <span className="text-original text-sm line-through font-semibold">EGP 2,299</span>
          </p>
          <ul>
            <li className='pb-1 text-[0.95rem] text-font'><i className="fa-solid fa-check text-hover text-xs"></i> Lightweight mesh upper</li>
            <li className='pb-1 text-[0.95rem] text-font'><i className="fa-solid fa-check text-hover text-xs"></i> Visible Air Max cushioning</li>
            <li className='pb-1 text-[0.95rem] text-font'><i className="fa-solid fa-check text-hover text-xs"></i> Breathable & durable</li>
            <li className='pb-1 text-[0.95rem] text-font'><i className="fa-solid fa-check text-hover text-xs"></i> Sizes: 38 - 43</li>
          </ul>
          <div className="card-actions flex justify-between pt-3">
            <button className="bg-hover text-white w-[110px] h-[2.7rem] rounded-xl font-semibold text-sm hover:bg-cart transition-all duration-300">Buy Now</button>
            <button className="bg-white text-hover w-[77px] h-[2.7rem] rounded-xl font-semibold text-sm border-2 border-hover hover:bg-hover hover:text-white transition-all duration-300">Details</button>
          </div>

        </div>
        <div className="card-footer text-center pb-5">
          <p className='text-[12.6px] text-signature font-medium'>Designed by Rawda</p>
        </div>
      </div>
    </>
  )
}
export default Card;
