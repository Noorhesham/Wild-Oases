import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings(){
  const queryClient=useQueryClient()
  const[searchParams]=useSearchParams();

  const filterValue=searchParams.get('status');
  const filter=!filterValue||filterValue==='all'?null:{field:'status',value:filterValue,method:'eq'}

  const sortByRow=searchParams.get('sortBy')||'startDate-desc';
  const [field,direction]=sortByRow.split('-');
  const sortBy={field,direction}

  const page=!searchParams.get('page')?1:Number(searchParams.get('page'));

    const {
        isLoading,
        data: {data:bookings,count}={},
        error,
      } = useQuery({
        queryKey: ["bookings",filter,sortBy,page],
        queryFn: ()=>getAllBookings({filter,sortBy,page}),
      });
      //Pre Fetching
      const numPages=Math.ceil(count/PAGE_SIZE)

      if(page!==numPages) queryClient.prefetchQuery({
        queryKey:["bookings",filter,sortBy,page+1],
        queryFn:()=>getAllBookings({filter,sortBy,page:page+1})
      })
      if(page!==1) queryClient.prefetchQuery({
        queryKey:["bookings",filter,sortBy,page-1],
        queryFn:()=>getAllBookings({filter,sortBy,page:page-1})
      })

      return { isLoading,bookings,error,count}
}