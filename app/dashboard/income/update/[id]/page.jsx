import {getData} from "@/lib/getData"
import NewIncome from '../../new/page';

export default async function Update({params:{id}}) {
  const data = await getData(`/api/income/${id}`);
  console.log(data)
  return (
      <NewIncome initialData={data} isUpdate={true}/>
  )
}
