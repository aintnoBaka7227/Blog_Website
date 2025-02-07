'use client'
import React from 'react'

function page() {
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
        </table>
      </div>
    </div>
  )
}

export default page