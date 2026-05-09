import { create } from 'zustand';
import { initialState } from '@/config/constants-api';
import axiosClient from '@/config/axiosClient';
import { Checkin } from '@/types';

// Define the response shape for the UI
interface StoreResponse {
    status: number;
    sms: string;
}

type DailyAttendanceStore = {
    loading: boolean;
    success: boolean;
    error: boolean;
    dailyEmployeesData: Checkin.AttendanceOutSource[];
    getDailyReportData: (parame: { punchTime: string; empCode?: string }) => Promise<StoreResponse>;
};

export const useDailyAttendanceStore = create<DailyAttendanceStore>((set) => ({
    ...initialState,
    dailyEmployeesData: [],
    getDailyReportData: async (parame: { punchTime: string; empCode?: string }): Promise<StoreResponse> => {
        // Start loading while preserving existing data or resetting error states
        set({ loading: true, error: false, success: false });

        try {
            const { punchTime, empCode } = parame;

            const params: { punchTime: string; empCode?: string } = { punchTime };
            if (empCode && empCode.trim()) params.empCode = empCode.trim();

            const response = await axiosClient.get(`Attendance/GetPunchTimeDaily`, {
                params,
            });

            const isSuccess = [200, 201].includes(response?.status);
            const data = response?.data ?? [];
            const message = isSuccess ? 'Success' : 'Failed';

            set({ loading: false, success: isSuccess, dailyEmployeesData: isSuccess ? data : [], error: !isSuccess });

            return { status: response?.status || response?.status, sms: message };
        } catch (error: any) {
            console.error('Error fetching data:', error);

            set({ loading: false, error: true, success: false, dailyEmployeesData: [] });

            return {
                status: error?.response?.status ?? 500,
                sms: error?.response?.data?.message ?? 'An error occurred while fetching data.',
            };
        }
    },
}));
