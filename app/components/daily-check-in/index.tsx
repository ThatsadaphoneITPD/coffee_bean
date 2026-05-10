/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { DataTable } from 'primereact/datatable';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { GetColumns } from './columns';
import { Nullable } from 'primereact/ts-helpers';
import { Calendar } from 'primereact/calendar';
import EmptyData from '@/app/shared/empty-table/container';
import { InputText } from 'primereact/inputtext';
import { useDailyAttendanceStore } from '@/app/store/daily-checkin/dailyStore';
import moment from 'moment';
import LoadingEmpty from '@/app/shared/empty-table/loading-empty';

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
        <div className="bg-white border-bottom-1 border-50 px-4 py-4">
            <div className="flex flex-column md:flex-row md:align-items-center justify-content-between gap-4">
                {/* Left Side: Title & Awesome Icon */}
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
                        <h2 className="text-xl font-black m-0 p-0 text-900 tracking-tight uppercase">
                            Attendance ປະຈຳວັນ
                        </h2>
                        <p className="text-sm text-500 m-0 font-medium">Real-time fingerprint log tracking</p>
                    </div>
                </div>

                {/* Right Side: Awesome Search & Filter */}
                <div className="flex flex-wrap gap-3 align-items-center">
                    {/* Modern Search Bar */}
                    <div className="relative group w-13rem">
                        <i className="pi pi-search pl-2 absolute left-3 top-50 -mt-2 text-400 group-focus-within:text-blue-500 transition-colors duration-200 z-2"></i>
                        <InputText
                            value={emcode || ''}
                            onChange={(e) => setEmcode(e.target.value)}
                            placeholder="ຄົ້ນຫາ ລະຫັດພະນັກງານ..."
                            style={{ height: '2.5rem' }}
                            className="p-inputtext-sm pl-5 shadow-sm border-round-xl border-1 border-200 hover:border-400 focus:border-blue-500 w-full md:w-16rem transition-all"
                        />
                    </div>
                    <div className="border-left-3 border-200 mx-2"></div>
                    {/* Styled Calendar */}
                    <Calendar
                        value={date}
                        onChange={(e) => setDate(e.value as Date)}
                        dateFormat="dd/mm/yy"
                        showIcon
                        placeholder="Filter Date"
                        className="p-inputtext-sm shadow-sm border-round-xl"
                        style={{ height: '2.5rem' }}
                    />
                </div>
            </div>
        </div>
    );

    // ເພີ່ມເຕີມ Loader Template
    const loaderTemplate: React.ReactNode = (
        <div className="flex flex-column align-items-center justify-content-center w-full h-full">
            <LoadingEmpty />
            <div className="mt-4 text-center">
                <span className="text-blue-600 font-black text-xl tracking-tighter block uppercase animate-pulse">
                    ດຳເນີນການດຶງຂໍ້ມູນ log...
                </span>
                <span className="text-500 font-bold text-xs tracking-widest uppercase">
                    ຝ່າຍ ICT - Finger Print Outsource
                </span>
            </div>
        </div>
    );

    return (
        <div className="card shadow-8 border-round-2xl overflow-hidden border-1 border-100 bg-white">
            {header}

            <div className="relative">
                {/* Container for absolute loader positioning */}
                <DataTable
                    value={tableData}
                    size="large"
                    stripedRows
                    rowHover
                    dataKey="_key"
                    rows={10}
                    paginator
                    ref={dt}
                    selection={selectedItem}
                    onSelectionChange={(e: any) => setSelectedItem(e.value)}
                    rowsPerPageOptions={[10, 25, 50]}
                    className="datatable-responsive no-border-header"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="ສະແດງ {first} ຫາ {last}, ຈາກຈຳນວນ {totalRecords}"

                    // Loading Props
                    loading={loading}
                    loadingIcon={loaderTemplate}
                    emptyMessage={<EmptyData emptytext="ບໍ່ພົບຂໍ້ມູນ ພະນັກງານກົດເຂົ້າ" />}
                    // emptyMessage={loaderTemplate}
                    scrollable
                    scrollHeight="400px"
                    responsiveLayout="scroll"
                    pt={{
                        thead: {
                            className: 'bg-gray-50 border-bottom-2 border-100'
                        },
                        column: {
                            headerCell: ({ context }: any) => ({
                                className: 'text-sm font-bold text-600 uppercase tracking-wider'
                            })
                        }
                    }}
                >
                    {GetColumns().map((col, i) => React.cloneElement(col, { key: i }))}
                </DataTable>
            </div>
        </div>
    );
}
