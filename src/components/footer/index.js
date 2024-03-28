import CopyrightIcon from '@mui/icons-material/Copyright';
import Styles from '../../app/page.module.css'
import Image from 'next/image';
const Footer = () => {
  return (
    <>
<div className={Styles.myFooter}>

<CopyrightIcon/>
<div>
    Sponsers
    <div className={Styles.mySponsers}>
    <div>
    <Image src="/tesla.png" width={100} height={100} />
    </div>
    <div>
    <Image src="/spacex.png" width={100} height={100}/>
    </div>
    <div>
    <Image src="/meta.png" width={100} height={100}/>
    </div>
   
   
    </div>
</div>
</div>
    </>
    
  )
}

export default Footer