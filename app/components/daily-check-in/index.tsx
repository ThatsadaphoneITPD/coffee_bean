/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { DataTable } from 'primereact/datatable';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { GetColumns } from './columns';
import toast from 'react-hot-toast';
import { Nullable } from 'primereact/ts-helpers';
import { Calendar } from 'primereact/calendar';
import EmptyData from '@/app/shared/empty-table/container';
import { InputText } from 'primereact/inputtext';
import { useDailyAttendanceStore } from '@/app/store/daily-checkin/dailyStore';
import moment from 'moment';

export default function DailyCheckIn() {
    const { loading, dailyEmployeesData, getDailyReportData } = useDailyAttendanceStore();

    const [selectedItem, setSelectedItem] = useState<any[]>([]);
    const dt = useRef<DataTable<any>>(null);

    const [emcode, setEmcode] = useState<Nullable<string>>('');
    const [debouncedEmcode, setDebouncedEmcode] = useState<Nullable<string>>('');
    const [date, setDate] = useState<Nullable<Date>>(new Date());

    // Debounce effect to delay updates to `debouncedEmcode`
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedEmcode(emcode);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [emcode]);

    const getData = useCallback(async () => {
        if (!date) return;

        try {
            const punchTime = moment(date).format('YYYY-MM-DD');
            await getDailyReportData({ punchTime });
        } catch (error) {
            console.log(error);
        }
    }, [date, getDailyReportData]);

    // Fetch data whenever date changes (search is client-side filtered)
    useEffect(() => {
        void getData();
    }, [getData]);

    const normalizedSearch = useMemo(() => {
        return (debouncedEmcode ?? '').trim().toLowerCase();
    }, [debouncedEmcode]);

    const filteredEmployees = useMemo(() => {
        if (!normalizedSearch) return dailyEmployeesData;

        return dailyEmployeesData.filter((item) => {
            const code = (item?.emp_code ?? '').toLowerCase();
            return code.includes(normalizedSearch);
        });
    }, [dailyEmployeesData, normalizedSearch]);

    // Keep DataTable keys stable and avoid recreating row objects on every render
    const tableData = useMemo(() => {
        return filteredEmployees.map((item, index) => {
            const empCode = item?.emp_code ?? 'unknown';
            const punchDate = item?.punch_date ?? 'na';
            return {
                ...item,
                _key: `${empCode}-${punchDate}-${index}`,
            };
        });
    }, [filteredEmployees]);

    // Clear selection when filters change
    useEffect(() => {
        setSelectedItem([]);
    }, [date, normalizedSearch]);

    const onViewDoc = useCallback(
        async (fw_req_id: any) => {
        },
        []
    );

    const header = (
        <div className="bg-white border-bottom-1 border-100 px-4 py-4">
            <div className="flex flex-column md:flex-row md:align-items-center justify-content-between gap-3">
                <div className="flex align-items-center gap-3">
                   <div className="bg-blue-600 border-round-2xl p-1 shadow-4" style={{ background: '#1e40af' }}>
                        <div className="bg-blue-600 border-round-xl p-3 flex align-items-center justify-content-center"
                            style={{ 
                                background: 'linear-gradient(145deg, #2563eb, #1d4ed8)',
                                boxShadow: 'inset 2px 2px 5px rgba(255,255,255,0.2)' 
                            }}>
                            <i className="pi pi-users text-white text-xl drop-shadow-sm"></i>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold m-0 p-0 text-900">Attendance ປະຈຳວັນ</h2>
                        <p className="text-sm text-500 m-0">Real-time finger print log tracking</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 align-items-center">
                    <div className="p-inputgroup flex-1 w-full md:w-16rem shadow-sm">
                        <span className="p-inputgroup-addon bg-white">
                            <i className="pi pi-search text-400"></i>
                        </span>
                        <InputText
                            value={emcode || ''}
                            onChange={(e) => setEmcode(e.target.value)}
                            placeholder="ຄົ້ນຫາ ລະຫັດພະນັກງານ"
                            className="p-inputtext-sm"
                        />
                    </div>

                    <Calendar
                        value={date}
                        onChange={(e) => setDate(e.value as Date)}
                        dateFormat="dd/mm/yy"
                        style={{ height: '2.5rem' }}
                        showIcon
                        className="p-inputtext-sm shadow-sm"
                        placeholder="Filter Date"
                    />
                </div>
            </div>
        </div>
    );

    // In your return, wrap DataTable in a styled container
    return (
        <div className="card shadow-2 border-round-xl overflow-hidden border-1 border-100 bg-white">
            {header}
            <DataTable
                value={tableData}
                size="large"
                // size="small"
                stripedRows
                rowHover
                dataKey="_key"
                rows={10}
                paginator
                ref={dt}
                sortField="_key"
                sortOrder={1}
                selection={selectedItem}
                onSelectionChange={(e: any) => setSelectedItem(e.value as any)}
                rowsPerPageOptions={[10, 25, 30, 40, 50, 100]}
                className="datatable-responsive"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="ສະແດງ {first} ຫາ {last}, ຈາກຈຳນວນ {totalRecords} ພະນັກງານ"
                loading={loading}
                emptyMessage={<EmptyData emptytext="ຂໍ້ມູນ ວ່າງເປົ່າ" />}
                responsiveLayout="scroll"
            >
                {GetColumns().map((col, i) => React.cloneElement(col, { key: i }))}
            </DataTable>
        </div>
    );
}
