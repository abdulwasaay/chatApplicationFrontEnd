const ApiErrors = (response: any, data: any) => {
    const status = response?.status;
    if (status === 400) {
        return data?.message
    }
    else if (status === 401) {
        return "Unauthenticated User"
    }
    else if (status >= 500) {
        return "Something went Wrong"
    } else {
        return "Something went Wrong"
    }
}

export default ApiErrors;