import {getData} from "@/lib/getData"
import NewExpense from '../../new/page';

export default async function Update({params:{id}}) {
  const data = await getData(`/api/expense/${id}`);
  console.log(data)
  return (
      <NewExpense initialData={data} isUpdate={true}/>
  )
}
