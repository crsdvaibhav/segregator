import { NavLink } from 'react-router-dom'
import exchange from '../assets/exchange.svg'

function Header(){
    
    return(
        <div className="flex justify-end sm:pt-4  text-[#05386b] sm:text-xl font-custom">
            <NavLink to='/' className="py-[5px] px-2 mx-2 font-medium hover:text-white hover:bg-[#05386b] hover:shadow-lg hover:duration-500 rounded-sm">
                Home
            </NavLink>
            <NavLink to='/educate' className="py-[5px] px-2 mx-2 font-medium hover:text-white hover:bg-[#05386b] hover:shadow-lg hover:duration-500 rounded-sm">
                Learn
            </NavLink>
            <button className="py-[5px] px-2 mx-2 font-medium hover:text-white hover:bg-[#05386b] hover:shadow-lg hover:duration-500 rounded-sm">
                <a href='https://github.com/Samar1110/Hackfest2022.git' target='_blank'>Github</a>
            </button>
        </div>
    )
}

//colors - #26695c,#05386b

function Footer(){
    return(
        <div className=' mt-6 sm:mt-4 p-4 font-custom flex justify-center text-base sm:text-xl font-medium border-black border-t-2'>
            Made by: <a href='https://github.com/Samar1110/Hackfest2022.git' className='text-[#05386b] ' target='_blank'> Team Arsenic</a> 
        </div>
    )
}
function Teach(){
    return(
        <div className='p-4'>
            <Header/>
            <p className='font-custom flex flex-col px-12 py-4 font-medium text-[#26695c] text-base sm:text-xl text-justify'>
                <p className='text-3xl sm:text-5xl text-[#05386b] font-bold text-left'>
                    All about waste management
                </p>
                <div className='flex justify-center'>
                    <img src={exchange} className='w-2/5 m-8'></img>
                </div>
                <p className='py-8'>
                <span className='text-xl sm:text-2xl text-[#05386b] font-bold'>Effects of improper waste disposal <br/></span>
                Improper waste disposal has been identified as one of the leading causes of pollution. It is becoming a growing concern for both government and environmentalists as it poses severe threats to health and the environment. For instance, when water is contaminated with foreign substances, like harmful pathogens, toxic chemicals or medical waste, its chemical composition changes, making it dangerous to use. Diseases like Cholera, Dysentery and leptospirosis are spread through contaminated water and can cause severe health epidemics in a population. So segregating waste and properly disposing of it is a necessary activity.
                </p>
                <p>    
                <span className='text-xl sm:text-2xl text-[#05386b] font-bold'>6 Rs of waste management <br/></span>
                In the late 1970s, the 3 Rs, which stand for ‘reduce’, ‘reuse’, and ‘recycle’, <br/>
                They were introduced to give the public a guideline for reducing waste. The goal was to reduce North Americans’ waste production and to help the governments’ ability to manage waste.
                In 2013, writer Bea Johnson published her book “Zero Waste Home: The Ultimate Guide to Simplify Your Life by Reducing Your Waste.” She added two more Rs to the list in this book, Rot and Refuse. She presented the five Rs as a framework to produce less waste. Her goal is to help households and businesses recognise the habits that lead them to make more waste.
                </p>
                <p className='py-8'>
                <span className='text-xl sm:text-2xl text-[#05386b] font-bold'>This is what the 6Rs mean: <br/></span>
                    <ol className='list-decimal px-8'>
                        <li>Refuse - Refusing is about eliminating waste from the beginning and declining offers for free stuff that would result in instant destruction. 
                        </li> 
                        <li> Reduce - Reduce stands for reducing what is purchased and being aware of what you need and want. This goes together with refusing. What also helps is buying products of the best quality because they will last longer and will reduce the times you’ll need to accept that product.
                        </li>
                        <li> Reuse - Before throwing away something and replacing it with a new one, households and businesses are advised to see if they can reuse or repair it.
                        </li>
                        <li> Rot - Rot stands for composing, which is also a way of reducing waste.
                        </li>
                        <li> Recycle - As a last resort, there is recycling. If you have to throw away something, recycling is the most environmentally friendly method for waste disposal.
                        </li>
                        <li> Repurpose - Repurpose is also known as upcycling and refers to using one item for multiple purposes.
                        </li>
                    </ol>
                </p>
                <p className='py-8'>
                <span className='text-xl sm:text-2xl text-[#05386b] font-bold'>Types of waste: <br/></span>
                While waste can be divided in umpteen ways, the ones that we are more likely to find around us can be divided and managed in the following ways-<br/>
                    <br/>
                    <ol className='list-decimal px-8'>
                        <li> <span className='text-xl sm:text-2xl text-[#05386b] font-bold'>Biodegradable waste–</span> <br/>
                        Wastes that rot (undergo degradation) by the action of decomposers (tiny organisms found in the soil) are called biodegradable wastes. Biodegradable waste has a positive waste on the environment if treated properly since it can help in replenishing important nutrients in the soil. A good way to manage it is by composting. We can collect all the organic waste and compost it every week. While doing this, ensure to cover it to prevent a foul smell.
                        </li><br/>
                        <li><span className='text-xl sm:text-2xl text-[#05386b] font-bold'>Non-Biodegradable waste-</span> <br/>
                        Non-biodegradable waste is a major source of land, water and soil pollution and a source of major concern. If left untreated, it is a source of major concern. Some examples are plastic, glass, metal, aluminium cans, medical waste, electronic components, etc. 
                        <br/>
                            <ul className='list-disc px-8'>
                                <li> A possible strategy is to reduce our consumption of these goods, which will result in lesser waste.
                                </li>
                                <li> Apart from the reduction of waste, we should look towards recycling our waste. Used plastic bottles, soda cans and electronic devices can be sold to scrap dealers for recycling.
                                </li>
                                <li>We can convert our waste into many cool DIY projects like pen stands, figures and other artefacts.
                                </li> 
                            </ul>
                        </li>
                    </ol>
                </p>
            </p>
            <Footer/>
        </div>
    )
}

export default Teach;