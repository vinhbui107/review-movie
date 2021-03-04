export const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    },
};
export const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 16,
    },
};

export const onFinish = (values) => {
    console.log("Received values of form: ", values);
};

export const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};

export const config = {
    rules: [
        {
            type: "object",
            required: true,
            message: "Please select time!",
        },
    ],
};

export const residences = [
    {
        value: "Male",
        label: "Male",
    },
    {
        value: "Female",
        label: "Female",
    },
];

//HomePage
export const handleSearchForm = (searchForm) => {
    return searchForm ? "search__form__click" : "";
};

export const userIcon = () => {
    return <i class="fa fa-user mx-3"></i>;
};

//MovieDetail
