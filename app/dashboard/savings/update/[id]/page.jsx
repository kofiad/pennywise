import {getData} from "@/lib/getData"
import NewSavings from '../../new/page';

export default async function Update({params:{id}}) {
  const data = await getData(`/api/savings/${id}`);
  // console.log(data)
  return (
      <NewSavings initialData={data} isUpdate={true}/>
  )
}
