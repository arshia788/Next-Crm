import Link from 'next/link'

export default function Layout({children}) {
  return (
    <div className='bg-black h-full p-2 '>

        <header className='flex items-center justify-between w-10/12 mx-auto my-4'>
            <h2 className='text-xl text-white
            font-bold 
            '>
              <Link href="/">Next-Crm</Link>
            </h2>

            <Link
            className='bg-green-600 px-3 py-1 rounded'
            href='/add-customer'>Add-Customer</Link>
        </header>

        <div className='min-h-10/12 w-10/12 mx-auto my-8'>
            {children}
        </div>

        <footer className=' w-10/12 bg-zinc-200 mx-auto rounded p-1 text-center' >
          <p >CRM Project</p>
        </footer>
    </div>
  )
}

 