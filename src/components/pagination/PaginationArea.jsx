import React from 'react'

const PaginationArea = ({pageNumber,paginate,pageStart,next,prev}) => {
  return (
    <nav aria-label="Page navigation example">
    <ul class="inline-flex  text-sm">
  {pageNumber.length > 0 && 
  
      <li onClick={prev}>
        <a class="cursor-pointer flex items-center justify-center lg:px-3 px-[5px] lg:h-8 h-[25px] ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-[4px] lg:rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">&lt;</a>
      </li>
  }
  
  
      {pageNumber.map((item,i)=>(
          <li onClick={()=>paginate(item)}>
          <a  class={pageStart == i+1 ?  "flex items-center justify-center lg:px-3 px-[5px] lg:h-8 h-[25px] leading-tight text-white bg-[#262626] border border-gray-300 cursor-pointer"  :  "flex items-center justify-center lg:px-3 px-[5px] lg:h-8 h-[25px] leading-tight text-[#262626] bg-[white] border border-gray-300 cursor-pointer"  }>{item +1}</a>
        </li>
      
  
      ))}
  
  {pageNumber.length > 0 && 
      
      <li onClick={next}>
        <a class="cursor-pointer flex items-center justify-center lg:px-3 px-[5px] lg:h-8 h-[25px] leading-tight text-gray-500 bg-white border border-gray-300 rounded-[4px] lg:rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">&gt;</a>
      </li>
  }
    </ul>
  </nav>
  )
}

export default PaginationArea