import React from 'react';
import DailyCheckIn from '../components/daily-check-in';

const Page = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-6">
            {/* Breadcrumb or Category Label */}
            <div className="mb-4 flex align-items-center gap-2 text-blue-600 font-semibold">
                <i className="pi pi-shield"></i>
                <span className="uppercase text-xs tracking-wider">
                    Security {'&'} ຝ່າຍ ICT{'s'} Portal
                </span>
            </div>

            <div className="mb-5">
                <h1 className="text-3xl font-extrabold text-900 tracking-tight m-0">
                    Finger Print & Face Scanner Dashboard
                </h1>
                <p className="text-600 mt-1">ຕິດຕາມ ຄົນເຂົ້າ-ອອກ ວຽກ ລະບົບ Finger Print</p>
            </div>

            <DailyCheckIn />
        </div>
    );
};

export default Page;
