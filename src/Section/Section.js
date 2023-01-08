import './SectionStyle/style.css'

export default function section() {
    return(
        <div>
            <div className='flex containerSelector'>
                <div className='leftselect'>
                    <p>Popular products</p>
                </div>
                <div className='rightselect'>
                    <button className='allselectionbtn'>Cameras</button>
                    <button className='allselectionbtn'>Laptops</button>
                    <button className='allselectionbtn'>Tablets</button>
                    <button className='allselectionbtn'>Mouse</button>
                    <button className='allselectionbtn'>Sale</button>
                </div>
            </div>
            <div className='midselector flex'>
                <div className='cards'>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div className='containerlilSelector flex'>
                        <div className="lilselector">
                            <p className='first'>Camera</p>
                            <p className='second'>Sony Alpha iii</p>
                            <p className='third'>$11,70</p>
                        </div>
                        <div className='innershopselector'>
                            <img src="shopping.svg" alt="pic" />
                        </div>
                    </div>
                </div>
                <div className='cards'></div>
                <div className='cards'></div>
                <div className='cards'></div>
                <div className='cards'></div>
                <div className='cards'></div>
                <div className='cards'></div>
                <div className='cards'></div>
            </div>
        </div>
    )
}