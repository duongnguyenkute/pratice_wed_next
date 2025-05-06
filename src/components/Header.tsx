import Link from 'next/link'

export function Header() {
    return (
        <div className='px-[4.5rem] py-[2.5rem] flex justify-between justify-items-center items-center'>
            {/* Header logo */}
            <div>
                <Link href={'/'}><img src="logo.png" alt=""className=""/></Link>
            </div>
            {/* Nav */}
            <nav>
                <ul className='flex gap-[3.375rem]'>
                    <li className='text-xl font-semibold hover:text-gray-400 transition duration-300'><Link href="/about">About</Link></li>
                    <li className='text-xl font-semibold hover:text-gray-400 transition duration-300'><Link href="/how-we-give">How We Give</Link></li>
                    <li className='text-xl font-semibold hover:text-gray-400 transition duration-300'><Link href="/donation">Donations & Support</Link></li>
                    <li className='text-xl font-semibold hover:text-gray-400 transition duration-300'><Link href="/news">News</Link></li>
                    <li className='text-xl font-semibold hover:text-gray-400 transition duration-300'><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
            <button className='py-[0.875rem] px-[3.25rem] bg-primary text-xl font-semibold rounded-[3.125rem] cursor-pointer transition duration-300 hover:opacity-70'>
                Donate
            </button>

            

        </div>
    )
}