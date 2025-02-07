import React from 'react'

interface SubscriptionItemProps {
  email: string;
  date: Date;
  mongoID: string | number;
  deleteEmail: (mongoID: string | number) => void;
}

const SubscriptionTableItems: React.FC<SubscriptionItemProps> = ({ mongoID,email,date,deleteEmail }) =>  {
    const emailDate = new Date(date);

    return (
    <tr className='bg-white border-b text-left'>
        <th scope = 'row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            {email?email:"no email"}
        </th>
        <td className='px-6 py-4 hidden sm:block'>
            {emailDate.toDateString()}
        </td>
        <td onClick={()=>deleteEmail(mongoID)} className='px-6 py-4 cursor-pointer'>
            x
        </td>
    </tr>
  )
}

export default SubscriptionTableItems