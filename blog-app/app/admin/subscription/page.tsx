'use client'
import SubscriptionTableItems from '@/components/admin/SubscriptionTableItems'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

interface Email {
  email: string;
  date: Date;
  _id: string | number;
  deleteEmail: (mongoID: string | number) => void;
}

function page() {

  const [emails, setEmails] = useState<Email[]>([]);

  const fetchEmails = async () => {
    axios.get('http://localhost:3000/api/email')
    .then(response => {
      setEmails(response.data.emails)
      console.log(response.data.emails);
    })
    .catch(error => {
      console.error("Error fetching emails");
    })
  }

  useEffect(() => {
    fetchEmails();
  },[])

  const deleteEmail = async (mongoID: string | number) => {
    axios.delete(`http://localhost:3000/api/email`, {
      params: { mongoID },
    }) 
      .then(response => {
        console.log('Email deleted successfully', response);
        toast.success(response.data.msg);
        fetchEmails();
      })
      .catch(error => {
        console.error('Error deleting email', error);
        toast.error("Error");
      });
  }

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All Subscriptions</h1>
      <div className='realative max-w-[850px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className ='text-xs text-left text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope='column' className='px-6 py-3'>
                Email Subscription
              </th>
              <th scope='column' className='hidden sm:block px-6 py-3'>
                Date
              </th>
              <th scope='column' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((items,index)=> {
              return <SubscriptionTableItems key={index} mongoID={items._id} email={items.email} date={items.date} deleteEmail={deleteEmail}/>
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page