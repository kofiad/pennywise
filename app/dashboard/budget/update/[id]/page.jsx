import {getData} from "@/lib/getData"
import NewBudget from '../../new/page';

export default async function Update({params:{id}}) {
  const data = await getData(`/api/budget/${id}`);
  console.log(data)
  return (
      <NewBudget initialData={data} isUpdate={true}/>
  )
}
