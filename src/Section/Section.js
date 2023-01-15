import './SectionStyle/style.css'
import Add from '../AddData/Add'

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
                <Add/>
            </div>
        </div>
    )
}