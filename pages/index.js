import connectDB from '../utils/connectDB';
import Customer from '../models/Customer';
import HomePage from '../components/templates/HomePage';

function index({ data }) {
  return (
    <div>
      <h1 className=' mt-16 text-xl font-bold text-green-500'>Our-Customers</h1>

      <HomePage data={data}/>
    </div>
  )
}

export default index;


// baray in SSR kardi chon dar lahzeh ehtemal dareh karbari ezafeh beshe
export async function getServerSideProps() {

  try {
    await connectDB()
    const customer = await Customer.find()
    return {
      props: { data: JSON.parse(JSON.stringify(customer)) }
    }

  } catch (err) {
    return {
      notFound: true
    }
  }
}