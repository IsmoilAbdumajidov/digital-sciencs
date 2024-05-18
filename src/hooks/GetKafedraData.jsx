import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { instance } from "../api/axios"
import { toast } from "react-toastify"

export const getKafedra = () => {
    return useQuery(["getKafedra"], () => instance.get(`main/departments`), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => console.log(data),
        select: (data) => data?.data?.data,
        onError: (error) => {
            toast.error("Qandaydir xatolik bor")
            console.log(error);
        }
    })
}
export const getStatsistic = () => {
    return useQuery(["getStatsistic"], () => instance.get(`/departments/statistics`), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => console.log(data),
        // select: (data) => data?.data?.data,
        onError: (error) => {
            toast.error("Qandaydir xatolik bor")
            console.log(error);
        }
    })
}

export const postKafedra = () => {
    return useMutation((id) => instance.post(`/departments/${id}/subjects`),
        {
            // select: (data) => data?.data?.data,
            onSuccess: (data) => {
                console.log(data);
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}