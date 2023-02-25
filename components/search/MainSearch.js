function MainSearch() {
  return (
    <form className='flex items-center bg-[#dff9fb] p-5 rounded-lg w-full'>
        <select className='hidden'>
            <option></option>
        </select>
        <input type='text' placeholder="&#127871; ready? Find the perfect movie to match" className='w-[70%] h-12 px-4 placeholder:text-[#535c68] focus:outline-0		'/>
        <button className='btn-search w-[30%] whitespace-nowrap	'>Explore now</button>
    </form>
  )
}

export default MainSearch