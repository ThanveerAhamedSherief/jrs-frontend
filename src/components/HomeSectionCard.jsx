import image1 from '../assets/beautiful-young-woman-wearing-sari.jpg';


const HomeSectionCard = ({product}) => {
  return (
    <div className='bg-white cursor-pointer flex flex-col items-center rounded-lg shadow-lg overflow-hidden w-[15rem]  border'>

        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src={product.imageUrl} alt='No images found'/>
        </div>
        <div className='p-4 flex flex-col items-center justify-center'>
            <h3 className='text-lg font-medium text-gray-900'>{product.price}</h3>
            <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
        </div>
    </div>
  )
}

export default HomeSectionCard