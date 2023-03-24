import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="m-0 row vh-100 justify-content-center align-content-center">
      <div className="col-xl-2 col-lg-4 col-md-6 col-sm-12 text-center">
        <h2 className='display-6'>Hello Welcome</h2>
        <p className='lead'>Lorem</p>
        <div className='row g-5'>
          <div className='col-12'>
            <h2 className='display-6'>Education</h2>
          </div>
          <div className='col-12'>
            <ul className='text-lg-start'>
              <li>
                <p className='lead'>King Abdullaziz University</p>
              </li>
              <li>
                <p className='lead'>Information Technolgy</p>
              </li>
              <li>
                <p className='lead'>GPA 4.59 / 5</p>
              </li>
            </ul>
          </div>
          <div className='col-12'>
            <h2 className='display-6'>Expernice</h2>
          </div>
          <div className='col-12'>
            <ul className='text-lg-start'>
              <li>
                <p className='lead'>King Abdullaziz University</p>
              </li>
              <li>
                <p className='lead'>Information Technolgy</p>
              </li>
              <li>
                <p className='lead'>GPA 4.59 / 5</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
