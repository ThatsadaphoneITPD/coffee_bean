/* eslint-disable react/display-name */
'use client';
import React from 'react';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { Avatar } from 'primereact/avatar';
import moment from "moment";
import "moment/locale/lo";

const textDark = "#0f172a"; // Slate 900
const textMuted = "#64748b"; // Slate 500


const EmployeeBody = (rowData: any) => {
    const initials = rowData?.fullname?.split(' ').map((n: any) => n[0]).join('').toUpperCase().slice(0, 2);
    return (
        <div className="flex align-items-center gap-3">
            <Avatar
                label={initials || "?"}
                shape="circle"
                className="bg-blue-600 text-white font-bold shadow-sm"
                style={{ width: '32px', height: '32px', fontSize: '12px' }}
            />
            <div className="flex flex-column">
                <span className="font-bold tracking-tight" style={{ color: textDark }}>
                    {rowData?.fullname || "-"}
                </span>
                <span className="text-xs font-medium" style={{ color: textMuted }}>
                    CODE: {rowData?.emp_code}
                </span>
            </div>
        </div>
    );
};

const PunchDateBody = (rowData: any) => (
    <div className="flex flex-column">
        <span className="font-semibold text-sm" style={{ color: textDark }}>
            {rowData?.punch_date ? moment(rowData.punch_date).format("DD/MM/YYYY") : "-"}
        </span>
        <span className="text-xs text-blue-500 font-medium">
            ວັນ{rowData?.punch_date ? moment(rowData.punch_date).format("dddd") : ""}
        </span>
    </div>
);

const TimeBadge = ({ time, isCheckOut }: { time: string, isCheckOut?: boolean }) => {
    if (!time) return (
        <div className="flex align-items-center gap-2 justify-content-center opacity-40">
            <div className="w-1rem h-1px bg-400"></div>
            <span className="text-xs font-medium uppercase tracking-widest text-400">-ຍັງໄດ້ກົດເທື່ອ-</span>
            <div className="w-1rem h-1px bg-400"></div>
        </div>
    );

    const icon = isCheckOut ? "pi pi-sign-out" : "pi pi-sign-in";
    const bg = isCheckOut ? "bg-orange-50 text-orange-700 border-orange-100" : "bg-blue-50 text-blue-700 border-blue-100";

    return (
        <div className={`inline-flex align-items-center gap-2 px-3 py-2 rounded-xl border ${bg} shadow-sm transition-all hover:scale-105`}>
            <i className={`${icon} text-xs`}></i>
            <span className="text-sm font-bold tracking-tight">
                {moment(time, "HH:mm:ss").format("HH:mm:ss")}
            </span>
        </div>
    );
};

export const GetColumns = () => {
    const headerClassName = "text-sm font-bold text-600 uppercase tracking-wider bg-gray-50 py-3";


    return [
        <Column
            key="fullname"
            header="ພະນັກງານ / ລະຫັດ"
            body={EmployeeBody}
            style={{ minWidth: '250px' }}
            headerClassName={headerClassName}
        />,
        <Column
            key="punch_date"
            header="ວັນທີ ຕິດຕາມ"
            body={PunchDateBody}
            style={{ width: '20%' }}
        />,
        <Column
            key="first_punch"
            header="Check-In"
            body={(rd) => <TimeBadge time={rd.first_punch} />}
            align="center"
        />,
        <Column
            key="last_punch"
            header="Check-Out"
            body={(rd) => <TimeBadge time={rd.last_punch} isCheckOut />}
            align="center"
        />
    ];
};