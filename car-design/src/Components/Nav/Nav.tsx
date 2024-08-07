import logo from '../../assets/img/logomoto.png'

export default function Nav(){
    return (
        <>
        
        <div className="flex items-center flex-col justify-center text-white py-5">
            
                <img src={logo} alt="" style={{ width: '50px', height: '50px' }}/>
                <div className='p-[2rem]'>
                    <ul className='flex gap-[5rem]'>
                        <li>Home</li>
                        <li>Models</li>
                        <li>Radian Motors</li>
                        <li>About</li>
                        <li>Reviews</li>
                    </ul>
                </div>
            
        </div>
        </>
    )
        
}