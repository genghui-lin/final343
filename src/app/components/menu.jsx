import Link from 'next/link'

export default function menu() {
    return (
      <>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <a href='https://exam-part-one.vercel.app/' target='_blank'>Midterm Part I - Expense</a>
          </li>
          <li>
            <a href='https://exam-partr-two.vercel.app/#get-started' target='_blank'>Midterm Part II Site</a>
          </li>
          <li>
            <Link href='/faq'>FAQ</Link>
          </li>
        </ul>
      </>
    )
  }