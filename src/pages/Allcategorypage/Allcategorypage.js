import React from 'react'
import Allcatogery from '../../components/catogerys/Allcatogery'
import Pagination from '../../components/utility/Pagination'
import GetAllCategoryHook from '../../hook/category/get-all-category'


const Allcategorypage = () => {
const [categoryitems,pageCount,getPage]= GetAllCategoryHook();
 
  return (
    <div style={{minHeight:'560px'}}>
      <Allcatogery data = {categoryitems}/>

      {pageCount > 1 ? (<Pagination pageCount= {pageCount} onPress = {getPage} />):null }
      
    </div>
  )
}

export default Allcategorypage
