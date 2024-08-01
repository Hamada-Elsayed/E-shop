import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproductsearch } from '../../Redux/actions/Products-action';

export const GetProductHook = () => {

        const dispatch = useDispatch();

        const getproduct = async()=>{
                let word = localStorage.getItem('word')
                let catfilter;
                if(localStorage.getItem('catchecked')!= null) {
                        catfilter = (localStorage.getItem('catchecked'))
                }
                let brandfilter;
                if(localStorage.getItem('brandcheck')!= null) {
                        brandfilter = (localStorage.getItem('brandcheck'))
                }
                sortData(); 
                await dispatch(getproductsearch(`sort=${sort}&keyword=${word}&limit=${8}&${catfilter}&${brandfilter}`))
        }

        useEffect (()=>{
                getproduct();
        },[])

        const products = useSelector(state=>state.Products.products);


      // to get nubmer of products 
      let productnumber = 0;
      if(products.results){
        productnumber = products.results
      }
    //to get page count
        let pageCount = 0;
        if (products.paginationResult)
                {pageCount = products.paginationResult.numberOfPages}

        let items = []
        try {
                if(products.data){
                items = products.data
        }
        } catch (error) {}
        
        // get product with pagination
        const getproductonpress = async(page)=>{
                let word = localStorage.getItem('word')
                let catfilter;
                if(localStorage.getItem('catchecked')!= null) {
                        catfilter = (localStorage.getItem('catchecked'))
                }
                let brandfilter;
                if(localStorage.getItem('brandcheck')!= null) {
                        brandfilter = (localStorage.getItem('brandcheck'))
                }
                sortData(); 
                await dispatch(getproductsearch(`sort=${sort}&keyword=${word}&limit=${8}&page=${page}&${catfilter}&${brandfilter}`))
        }


        // get product with sorting 
        let sortitem = '', sort;

        const sortData = ()=>{
                if(localStorage.getItem('sortItem') !==  null){
                        sortitem = localStorage.getItem('sortItem')  
                } else {
                        sortitem = ""
                }            

                if(sortitem === 'السعر من الاعلي للاقل') {
                        sort = '-price'
                } 
                else if (sortitem === ' السعر من الاقل للاعلي'){
                        sort = '+price'

                } else if (sortitem === '') {
                        sort = '';
                }



        }



        return [items,getproduct,getproductonpress,pageCount,productnumber];

}

