
export const Input = ({ input, meta, ...props }) => {
    const isError = meta.touched && meta.error
    return (
        <>
            <input {...input} {...props} />
            {isError && <span>{meta.error}</span>}
        </>
    )
}