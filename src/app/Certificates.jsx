import React, {useState} from 'react'
import AccountHeader from '../assets/components/account-components/AccountHeader'
import AccountMenu from '../assets/components/account-components/AccountMenu'
import CourseCertificateMain from '@/assets/components/account-components/CourseCertificateMain';
import CertificateLists from '@/assets/components/account-components/CertificateLists';

function Certificates({ courseId}) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  return (
    <>
    <AccountHeader />
    <main className="flex flex-row justify-around w-full p-0 m-0 mx-auto pt-[30px]">
      <aside className="w-fit border ml-0 p-0 relative -top-8">
        <AccountMenu />
      </aside>
      <section className="w-full px-4">
        <CertificateLists onSelectCertificate={setSelectedCertificate} />
        <CourseCertificateMain courseId={courseId} />
      </section>
    </main>
    </>
  )
}

export default Certificates;